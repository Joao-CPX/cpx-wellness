// Permanent (301) redirects for hosts that used to serve this content:
// - wellnesscenter.cellpowerx.com: the site's first address, same paths.
// - www.int-medicine.com: Nuno Nina's former clinic site (WordPress), mapped
//   page by page so its search history carries over to the new pages.
const NEW_ORIGIN = 'https://wellness.cellpowerx.com';
const INT_MEDICINE_GSC_FILE = 'google36b0d22618e75cd4.html';

const INT_MEDICINE_PATHS = {
  '/': '/en/',
  '/nuno-nina/': '/en/about/',
  '/center/': '/en/about/',
  '/contacts/': '/en/contact/',
  '/timewaver/': '/en/services/#timewaver',
  '/nanopulse/': '/en/services/#nanopulse',
  '/infrared-system/': '/en/services/#infrared',
  '/cellpowerx/': 'https://www.cellpowerx.com/',
  '/water/': 'https://www.cellpowerx.com/',
};

const intMedicineTarget = (pathname) => {
  const path = pathname.endsWith('/') ? pathname : `${pathname}/`;
  const target = INT_MEDICINE_PATHS[path]
    // CellPower Water FAQ pages belong to the product brand
    ?? (path.startsWith('/helpie_faq') ? 'https://www.cellpowerx.com/' : '/en/');
  return target.startsWith('http') ? target : NEW_ORIGIN + target;
};

export async function onRequest({ request, next }) {
  const url = new URL(request.url);

  if (url.hostname === 'wellnesscenter.cellpowerx.com') {
    return Response.redirect(NEW_ORIGIN + url.pathname + url.search, 301);
  }

  if (url.hostname === 'www.int-medicine.com' || url.hostname === 'int-medicine.com') {
    // Google Search Console ownership file (needed for the change-of-address
    // tool); must keep being served, so it is exempt from the redirect
    if (url.pathname === `/${INT_MEDICINE_GSC_FILE}`) {
      return new Response(`google-site-verification: ${INT_MEDICINE_GSC_FILE}`, {
        headers: { 'Content-Type': 'text/html; charset=utf-8' },
      });
    }
    return Response.redirect(intMedicineTarget(url.pathname), 301);
  }

  return next();
}
