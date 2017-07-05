import get from 'lodash/fp/get'

export function hrefForLocalPage({page}) {
    // Check if it has a stored page attached at all.
    if (!get(['_attachments', 'frozen-page.html'])(page)) {
        return undefined
    }
    const pageId = page._id
    const uri = `/page-viewer/localpage.html?page=${encodeURIComponent(pageId)}`
    const hash = (page.url && page.url.split('#')[1])
    const href = (hash !== undefined) ? uri + '#' + hash : uri
    return href
}
