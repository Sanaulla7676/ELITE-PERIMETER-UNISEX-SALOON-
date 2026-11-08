const checks = [
  ["facials","whitening-facial-ullal"],
  ["facials","korean-glass-facial-ullal"],
  ["facials","gold-facial-ullal"],
  ["facials","bridal-facial-ullal"],
  ["facials","hyder-facial-ullal"],
  ["facials","10-step-whitening-facial-ullal"],
  ["facials","face-de-tan-ullal"],
  ["waxing","full-arms-waxing-ullal"],
  ["waxing","underarms-waxing-ullal"],
  ["waxing","half-legs-waxing-ullal"],
  ["waxing","full-legs-waxing-ullal"],
  ["waxing","chocolate-waxing-ullal"],
  ["threading","eyebrow-threading-ullal"],
  ["threading","upper-lip-threading-ullal"],
  ["threading","chin-threading-ullal"],
  ["threading","forehead-threading-ullal"],
  ["nails","pedicure-ullal"],
  ["nails","manicure-ullal"],
  ["nails","lavender-pedi-spa-ullal"],
  ["nails","lavender-mani-spa-ullal"],
  ["nails","glass-shine-pedi-spa-ullal"],
  ["nails","glass-shine-mani-spa-ullal"],
];
(async()=>{
  const rows=[];
  for(const [category,slug] of checks){
    const route=`/services/${category}/${slug}/`;
    const asset=`/images/services/${slug}.jpg`;
    try{
      const [pageResponse,imageResponse]=await Promise.all([
        fetch("http://localhost:3000"+route,{redirect:"manual"}),
        fetch("http://localhost:3000"+asset,{redirect:"manual"})
      ]);
      const html=await pageResponse.text();
      rows.push({
        slug,
        pageStatus:pageResponse.status,
        imageStatus:imageResponse.status,
        imageType:imageResponse.headers.get("content-type"),
        imageBytes:imageResponse.headers.get("content-length"),
        correctHeroReferenced:html.includes(asset),
        hasUniqueH1:html.includes("<h1")
      });
    }catch(error){rows.push({slug,error:error.message});}
  }
  const bad=rows.filter(r=>r.pageStatus!==200||r.imageStatus!==200||!r.correctHeroReferenced||!r.hasUniqueH1);
  console.log(JSON.stringify({count:rows.length,passed:rows.length-bad.length,failed:bad.length,bad,rows},null,2));
  process.exitCode=bad.length?1:0;
})().catch(error=>{console.error(error);process.exit(1)});