"use client";

import { useMemo, useState } from "react";
import type { Service, ServiceCategory } from "@/lib/data";
import { ServiceCard } from "@/components/ServiceCard";

type Props = {
  services: Service[];
  categories: ServiceCategory[];
};

export function ServiceExplorer({ services, categories }: Props) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const normalizedQuery = query.trim().toLowerCase();

  const filteredServices = useMemo(() => {
    return services.filter((service) => {
      const category = categories.find((item) => item.slug === service.category);
      const matchesCategory = activeCategory === "all" || service.category === activeCategory;
      const searchable = [
        service.name,
        service.intro,
        service.primaryKeyword,
        service.category,
        category?.title ?? "",
      ].join(" ").toLowerCase();
      return matchesCategory && (!normalizedQuery || searchable.includes(normalizedQuery));
    });
  }, [activeCategory, categories, normalizedQuery, services]);

  return (
    <section className="service-explorer" aria-labelledby="service-explorer-title">
      <div className="explorer-header">
        <div>
          <span className="kicker">Find your service</span>
          <h2 id="service-explorer-title">What would you like to explore?</h2>
          <p>Search by treatment or choose a category. Every service opens its own details page.</p>
        </div>
        <div className="explorer-count" aria-live="polite">
          <strong>{filteredServices.length.toString().padStart(2, "0")}</strong>
          <span>{filteredServices.length === 1 ? "service" : "services"} shown</span>
        </div>
      </div>

      <div className="explorer-controls">
        <label className="service-search">
          <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.8" /><path d="m16 16 5 5" /></svg>
          <span className="sr-only">Search salon services</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search haircut, facial, waxing…"
            autoComplete="off"
          />
          {query && <button type="button" className="search-clear" onClick={() => setQuery("")} aria-label="Clear service search">Clear</button>}
        </label>
        <div className="service-filter-list" role="group" aria-label="Filter by service category">
          <button type="button" className={activeCategory === "all" ? "filter-chip is-active" : "filter-chip"} aria-pressed={activeCategory === "all"} onClick={() => setActiveCategory("all")}>All services</button>
          {categories.map((category) => (
            <button
              type="button"
              key={category.slug}
              className={activeCategory === category.slug ? "filter-chip is-active" : "filter-chip"}
              aria-pressed={activeCategory === category.slug}
              onClick={() => setActiveCategory(category.slug)}
            >
              {category.title}
            </button>
          ))}
        </div>
      </div>

      {filteredServices.length > 0 ? (
        <div className="feature-grid explorer-results">
          {filteredServices.map((service) => <ServiceCard key={service.slug} service={service} />)}
        </div>
      ) : (
        <div className="empty-search">
          <span className="empty-search-icon" aria-hidden="true">⌕</span>
          <h3>No matching services found.</h3>
          <p>Try a shorter search or clear the category filter to see the full menu.</p>
          <button type="button" className="button-secondary" onClick={() => { setQuery(""); setActiveCategory("all"); }}>Reset service search</button>
        </div>
      )}
    </section>
  );
}
