const routes = [
  "/",
  "/services/",
  "/services/facials/",
  "/services/waxing/",
  "/services/threading/",
  "/services/nails/",
  "/services/facials/whitening-facial-ullal/",
  "/services/hair/hair-spa-ullal/",
];
function imagesWithin(html, marker) {
  const start = html.indexOf(marker);
  if (start < 0) return [];
  const from = html.slice(start, start + 140000);
  const cards = [...from.matchAll(/<article class="service-card[^"]*"[^>]*>[\s\S]*?<img[^>]+src="([^"]+)"/g)];
  return cards.slice(0, 12).map(m => {
    const src = m[1];
    try {
      const url = new URL(src, "http://localhost:3000");
      return decodeURIComponent(url.searchParams.get("url") || src);
    } catch { return src; }
  });
}
(async()=>{
 const checks=[];
 for(const route of routes){
   const response=await fetch("http://localhost:3000"+route);
   const html=await response.text();
   checks.push({route,status:response.status,hasTitle:/<title>[^<]+<\/title>/.test(html),hasH1:html.includes("<h1")});
 }
 const whitening=await(await fetch("http://localhost:3000/services/facials/whitening-facial-ullal/")).text();
 const related=imagesWithin(whitening,'Explore related services');
 const home=await(await fetch("http://localhost:3000/")).text();
 const categoryTileSection=home.slice(home.indexOf('home-category-section'),home.indexOf('popular starting points'));
 const homeTileImages=[...categoryTileSection.matchAll(/<img[^>]+src="([^"]+)"/g)].map(m=>{try{const u=new URL(m[1],"http://localhost:3000");return decodeURIComponent(u.searchParams.get("url")||m[1]);}catch{return m[1]}});
 const facials=await(await fetch("http://localhost:3000/services/facials/")).text();
 const categoryImages=[...facials.matchAll(/<img[^>]+src="([^"]+)"/g)].map(m=>{try{const u=new URL(m[1],"http://localhost:3000");return decodeURIComponent(u.searchParams.get("url")||m[1]);}catch{return m[1]}});
 console.log(JSON.stringify({
  routes,
  routeResults:checks,
  relatedServiceCardImages:related,
  relatedImagesDistinct:new Set(related).size===related.length,
  homeCategoryImages:homeTileImages.slice(0,5),
  homeCategoryImagesDistinct:new Set(homeTileImages.slice(0,5)).size===5,
  facialCategoryPageFirstImages:categoryImages.slice(0,8),
  facialPageHasDedicatedHero:facials.includes("whitening-facial-ullal.jpg"),
 },null,2));
 const failed=checks.some(x=>x.status!==200||!x.hasTitle||!x.hasH1) || (related.length>1&&new Set(related).size!==related.length);
 process.exitCode=failed?1:0;
})().catch(e=>{console.error(e);process.exit(1)});