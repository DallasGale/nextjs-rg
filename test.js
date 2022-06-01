// return {
//   typeKey: "ABC-VIDEO-PLAYER",
//   title: "ABC Video Player",
// }
var AbcNews;
(function (AbcNews) {
  var AbcImageInlineEditor = /** @class */ (function () {
    function AbcImageInlineEditor() {
      this.typeKey = "ABC-VIDEO-PLAYER";
      this.title = "ABC Video Player";
      this.description = "Add a CM video ID here";
      this.fontAwesomeClass = "fa-video";
    }
    AbcImageInlineEditor.setImageMediaElementFields = function (
      mediaElement,
      d
    ) {
      mediaElement.setAttribute("data-src", d.url);
      mediaElement.setAttribute("data-priority", "10");
      if (d.width && d.height) {
        mediaElement.setAttribute("data-width", d.width);
        mediaElement.setAttribute("data-height", d.height);
      }
      if (d.crops) {
        mediaElement.setAttribute("data-crops", JSON.stringify(d.crops));
      }
    };
    AbcImageInlineEditor.displayError = function (messageKey) {
      window.toastr.error("Error while uploading an image.");
    };
    // AbcImageInlineEditor.uploadImage = function (
    //   loadingCallback,
    //   progressCallback,
    //   maxCount
    // ) {
    //   if (loadingCallback === void 0) {
    //     loadingCallback = null;
    //   }
    //   if (progressCallback === void 0) {
    //     progressCallback = null;
    //   }
    //   if (maxCount === void 0) {
    //     maxCount = null;
    //   }
    //   var promiseSource = NcCore.nativePromiseSource();
    //   var url =
    //     "//" +
    //     window.liveCenterConfig.hostname +
    //     "/JsonBulletinAdmin/UploadImageFromContent/";
    //   function submitAjaxForm(file) {
    //     try {
    //       loadingCallback && loadingCallback(file.name);
    //     } catch (e) {
    //       console.error(e);
    //     }
    //     var xhr = new XMLHttpRequest();
    //     xhr.open("POST", url, true);
    //     xhr.onreadystatechange = function () {
    //       if (xhr.readyState == 4) {
    //         if (xhr.status == 200) {
    //           res.push(JSON.parse(xhr.responseText));
    //           promiseSource.succeeded(res);
    //           return;
    //         } else {
    //           promiseSource.failed();
    //         }
    //       }
    //     };
    //     xhr.withCredentials = true;
    //     xhr.send(file);
    //   }
    //   var res = [];
    //   var imgFile = null;
    //   var fileElem = document.getElementById("form-file-input");
    //   fileElem.value = null;
    //   fileElem.onchange = function (e) {
    //     if (e.target.files && e.target.files.length >= 1) {
    //       imgFile = e.target.files;
    //       submitAjaxForm(imgFile[0]);
    //     }
    //   };
    //   fileElem.click();
    //   return promiseSource.promise;
    // };
    AbcImageInlineEditor.prototype.renderAddPanel = function (
      element,
      mediaElement,
      submitFunc
    ) {
      var loadingMutator = new NcHtml.Mutator().inDom(false);
      var inputMutator = new NcHtml.Mutator();
      var inputElem = null;
      var elem = NcHtml.create(
        NcHtml.jsxFactory(
          "div",
          null,
          NcHtml.jsxFactory(
            "div",
            { _mutator: loadingMutator, style: "padding-top: 5px" },
            NcHtml.jsxFactory("i", { class: "fa fa-fw fa-cog fa-spin" }),
            " loading"
          ),
          NcHtml.jsxFactory(
            "div",
            { _mutator: inputMutator, class: "input-group" },
            NcHtml.jsxFactory("input", {
              class: "form-control",
              placeholder: "Video ID",
              _func: function (elem) {
                return (inputElem = elem);
              },
              _onkeyup: function (event) {
                if (event.keyCode === 27) {
                  submitFunc(false);
                }
              },
            }),
            NcHtml.jsxFactory(
              "span",
              { class: "input-group-btn" },
              NcHtml.jsxFactory(
                "button",
                {
                  class: "btn btn-success",
                  _onclick: function () {
                    return click();
                  },
                },
                NcHtml.jsxFactory("i", { class: "fa fa-check" })
              )
            )
          )
        )
      );
      var bulletinBackend = null;
      /**
       *  Functionality for add and upload has been merged together in the same way as the omnibox.
       **/
      function click() {
        var rawLink = inputElem.value;
        console.log("rawLink", rawLink);

        AbcNews// loadingMutator.inDom(true);
        .inputMutator
          .inDom(false);
        if (!rawLink || (rawLink && rawLink.length === 0)) {
          AbcNews.AbcImageInlineEditor.uploadImage().then(
            (data) => console.log("data", data)
            // function (res) {
            //   var imageObj = res[0].result;
            //   loadingMutator.inDom(false);
            //   inputMutator.inDom(true);
            //   if (!res) {
            //     AbcNews.AbcImageInlineEditor.displayError(
            //       "imageInlineErrorUploading"
            //     );
            //     submitFunc(false);
            //     return;
            //   }
            //   AbcNews.AbcImageInlineEditor.setImageMediaElementFields(
            //     mediaElement,
            //     imageObj
            //   );
            //   submitFunc(true);
            // },
            // function () {
            //   loadingMutator.inDom(true);
            //   inputMutator.inDom(false);
            // }
          );
        }
      }
      element.appendChild(elem);
      inputElem.focus();
    };
    // AbcImageInlineEditor.prototype.renderInlinePanel = function (
    //   element,
    //   mediaElement,
    //   updatePreview
    // ) {
    //   var row = NcHtml.append(element, "div.row", {
    //     style: "margin-top: 10px"
    //   });
    //   var left = NcHtml.append(row, "div.col-sm-4", {
    //     style: "padding-right: 0; text-align: center"
    //   });
    //   var right = NcHtml.append(row, "div.col-sm-8");
    //   NcHtml.append(left, "img", {
    //     style: "max-width: 100%; max-height: 130px; margin-bottom: 10px;",
    //     src: mediaElement.getAttribute("data-src")
    //   });
    //   var div = $(
    //     "<div class='nc-input-box'><div class='input-icon'><i class='fa fa-pencil fa-fw'></i></div></div>"
    //   );
    //   var desc = $(
    //     "<input class='form-control input-field' placeholder='Description'/>"
    //   );
    //   desc.val(mediaElement.getAttribute("data-caption"));
    //   div.append(desc);
    //   $(right).append(div);
    //   div = $(
    //     "<div class='nc-input-box' style='margin-top: 8px;'><div class='input-icon'><i class='fa fa-info fa-fw'></i></div></div>"
    //   );
    //   var descAria = $(
    //     "<input class='form-control input-field' placeholder='Description for ARIA'/>"
    //   );
    //   descAria.val(mediaElement.getAttribute("data-caption-aria"));
    //   div.append(descAria);
    //   $(right).append(div);
    //   div = $(
    //     "<div class='nc-input-box' style='margin-top: 8px;'><div class='input-icon'><i class='fa fa-quote-left fa-fw'></i></div></div>"
    //   );
    //   var source = $(
    //     "<input class='form-control input-field' placeholder='Source'/>"
    //   );
    //   source.val(mediaElement.getAttribute("data-source"));
    //   div.append(source);
    //   $(right).append(div);
    //   div = $(
    //     "<div class='nc-input-box' style='margin-top: 8px;'><div class='input-icon'><i class='fa fa-chain fa-fw'></i></div></div>"
    //   );
    //   var link = $(
    //     "<input class='form-control input-field' placeholder='URL'/>"
    //   );
    //   link.val(mediaElement.getAttribute("data-url"));
    //   div.append(link);
    //   $(right).append(div);
    //   function update() {
    //     mediaElement.setAttribute("data-caption", desc.val());
    //     mediaElement.setAttribute("data-caption-aria", descAria.val());
    //     mediaElement.setAttribute("data-source", source.val());
    //     mediaElement.setAttribute("data-url", link.val());
    //     updatePreview();
    //   }
    //   source.keyup(function () {
    //     return update();
    //   });
    //   desc.keyup(function () {
    //     return update();
    //   });
    //   descAria.keyup(function () {
    //     return update();
    //   });
    //   link.keyup(function () {
    //     return update();
    //   });
    //   source.change(function () {
    //     return update();
    //   });
    //   desc.change(function () {
    //     return update();
    //   });
    //   descAria.change(function () {
    //     return update();
    //   });
    //   link.change(function () {
    //     return update();
    //   });
    // };
    return AbcImageInlineEditor;
  })();
  AbcNews.AbcImageInlineEditor = AbcImageInlineEditor;
})(AbcNews || (AbcNews = {}));
return new AbcNews.AbcImageInlineEditor();
