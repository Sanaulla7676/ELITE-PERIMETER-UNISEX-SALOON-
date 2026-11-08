"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { formatINR, packages, site } from "@/lib/data";

export function PackageExplorer() {
  const groups = [...new Set(packages.map((item) => item.group))];
  const [activeGroup, setActiveGroup] = useState("all");
  const [sortOrder, setSortOrder] = useState<"default" | "low" | "high">("default");

  const visiblePackages = useMemo(() => {
    const filtered = packages.filter((item) => activeGroup === "all" || item.group === activeGroup);
    if (sortOrder === "low") return [...filtered].sort((a, b) => a.price - b.price);
    if (sortOrder === "high") return [...filtered].sort((a, b) => b.price - a.price);
    return filtered;
  }, [activeGroup, sortOrder]);

  return (
    <div className="package-explorer">
      <div className="package-explorer-toolbar">
        <div className="package-filter-list" role="group" aria-label="Filter packages by type">
          <button type="button" className={activeGroup === "all" ? "filter-chip is-active" : "filter-chip"} aria-pressed={activeGroup === "all"} onClick={() => setActiveGroup("all")}>All packages</button>
          {groups.map((group) => (
            <button type="button" key={group} className={activeGroup === group ? "filter-chip is-active" : "filter-chip"} aria-pressed={activeGroup === group} onClick={() => setActiveGroup(group)}>{group}</button>
          ))}
        </div>
        <label className="package-sort">
          <span>Sort by price</span>
          <select value={sortOrder} onChange={(event) => setSortOrder(event.target.value as "default" | "low" | "high")}>
            <option value="default">Menu order</option>
            <option value="low">Price: low to high</option>
            <option value="high">Price: high to low</option>
          </select>
        </label>
      </div>

      <div className="package-result-line" aria-live="polite">
        <span>Showing <strong>{visiblePackages.length}</strong> of {packages.length} printed packages</span>
        <span>Prices in Indian rupees</span>
      </div>

      <div className="package-grid">
        {visiblePackages.map((item, index) => (
          <article className="package-card" key={item.slug}>
            <div className="package-card-topline"><span className="kicker">{item.group}</span><span className="package-number">OPTION {String(index + 1).padStart(2, "0")}</span></div>
            <h3>{item.name}</h3>
            <div className="package-price">{formatINR(item.price)}</div>
            <p>{item.description}</p>
            <div className="sidebar-divider" />
            <h4>Included services</h4>
            <ul>{item.includes.map((inc) => <li key={inc}>{inc}</li>)}</ul>
            {item.note && <div className="notice">{item.note}</div>}
            <Link className="package-enquire" href={`/packages/${item.slug}/`}>
              <span>View package details</span><span aria-hidden="true">↗</span>
            </Link>
            <a className="package-enquire package-call-link" href={`tel:${site.phoneE164}`}>
              <span>Call to confirm</span><span aria-hidden="true">↗</span>
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}
