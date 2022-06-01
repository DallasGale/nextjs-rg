return {
  typeKey: "ABC-VIDEO-PLAYER",
  renderElement: function (element) {
    console.log("element", element);
    element.innerText =
      "Preview of a video player will appear here, but the API response will just be an <ncpost-content>";
  },
};
