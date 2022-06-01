var ABCNews;
(function (ABCNews) {
  var ImageRenderer = /** @class */ (function () {
    function ImageRenderer() {
      this.typeKey = "ABC-IMAGE";
    }
    ImageRenderer.prototype.renderElement = function (element, mediaElement) {
      var imgObj = document.createElement("img");
      imgObj.src = mediaElement.getAttribute("data-src");
      imgObj.className = "ncpost-image";
      var link = mediaElement.getAttribute("data-url");
      if (link) {
        var a = document.createElement("a");
        a.href = link;
        a.style.border = "none";
        a.target = "_blank";
        a.appendChild(imgObj);
        element.appendChild(a);
      } else {
        element.appendChild(imgObj);
      }
      var caption = mediaElement.getAttribute("data-caption");
      var source = mediaElement.getAttribute("data-source");
      var ariaDesc = mediaElement.getAttribute("data-caption-aria");
      var ariaTag = mediaElement.getAttribute("aria-hidden");
      if (caption || source) {
        var elmByline = document.createElement("p");
        elmByline.className = "ncpost-image-byline";
        //elmByline.setAttribute("aria-hidden", "true");
        if (ariaDesc) imgObj.setAttribute("aria-label", ariaDesc);
        if (caption) {
          var elmByLineDescription = document.createElement("span");
          elmByLineDescription.className = "ncpost-image-byline-description";
          elmByLineDescription.textContent = caption;
          elmByline.appendChild(elmByLineDescription);
          imgObj.alt = caption;
        }
        if (source) {
          var elmByLineSource = document.createElement("span");
          elmByLineSource.className = "ncpost-image-byline-source";
          elmByLineSource.textContent = source;
          elmByline.appendChild(elmByLineSource);
        }
        if (!caption && source) {
          imgObj.alt = source;
        }
        element.appendChild(elmByline);
      } else {
        imgObj.setAttribute("aria-hidden", "true");
      }
    };
    return ImageRenderer;
  })();
  ABCNews.ImageRenderer = ImageRenderer;
})(ABCNews || (ABCNews = {}));

return new ABCNews.ImageRenderer();
