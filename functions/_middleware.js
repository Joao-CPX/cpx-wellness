// wellnesscenter.cellpowerx.com was the site's first address. Send every
// request on it to the same path on wellness.cellpowerx.com (permanent 301),
// so old links, bookmarks and search results keep working.
const OLD_HOST = 'wellnesscenter.cellpowerx.com';
const NEW_HOST = 'wellness.cellpowerx.com';

export async function onRequest({ request, next }) {
  const url = new URL(request.url);
  if (url.hostname === OLD_HOST) {
    url.hostname = NEW_HOST;
    return Response.redirect(url.toString(), 301);
  }
  return next();
}
