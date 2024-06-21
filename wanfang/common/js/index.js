/*$(function(){
    //$(".pb-conts .pd-asidebar").removeClass("hide");
});*/

/**
 * 定义加入收藏夹函数
 * @param {*} siteUrl
 * @param {*} siteName
 */
function joinFavorite(siteUrl, siteName) {
    if(!siteUrl){
        siteUrl=window.location.href;
    }
    if(!siteName){
        siteName=document.title;
    }
    // console.log(siteUrl);
    // console.log(siteName);
    try{
        if (window.sidebar) { // For Mozilla Firefox Bookmark
            window.sidebar.addPanel(siteName, siteUrl,"");
        } else if( window.external || document.all) { // For IE Favorite
            window.external.addFavorite(siteUrl, siteName);
        } else { // for other browsers which does not support
            alert('请按 Ctrl+D 手动收藏!');
            return false;
        }
    }catch(e){
        alert('浏览器不支持,请按 Ctrl+D 手动收藏!');
    }
}
