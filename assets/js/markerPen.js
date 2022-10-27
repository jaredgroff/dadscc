!(function (e) {
  e.extend({
    markerPen: function (n) {
      function r(e, r, t) {
        t &&
          (s.beginPath(),
          "marker" == d
            ? ((s.globalCompositeOperation = "source-over"),
              (s.strokeStyle = n.color),
              (s.lineWidth = n.stroke),
              (s.lineJoin = "round"),
              s.moveTo(o, i),
              s.lineTo(e, r),
              s.closePath(),
              s.stroke())
            : ((s.globalCompositeOperation = "destination-out"),
              s.arc(o, i, 8, 0, 2 * Math.PI, !1),
              s.fill())),
          (o = e),
          (i = r);
      }
      function t() {
        s.setTransform(1, 0, 0, 1, 0, 0),
          s.clearRect(0, 0, s.canvas.width, s.canvas.height);
      }
      var a = { color: "black", stroke: 5, opacity: 0.95 };
      (n = e.extend(a, n)),
        e("body").append(
          "<div id='marker_pen_main'><canvas canvas id = 'markerPenCanvas'></canvas></div><div id='marker_pen_controls'><a id='hidebtn'>Hide Markings</a><a id='togglebtn'>Disable markerPen</a><a id='markerbtn'>Pen</a><a id='eraserbtn'>Eraser</a><a id='clearbtn'>Clear</a></div><div id='marker_pen_hide_control'><a id='hidecontrols' style='left:1%'><</a></div>"
        ),
        e("#marker_pen_controls a, #hidecontrols").css({
          cursor: "pointer",
        }),
        e("#marker_pen_main").css({
          position: "absolute",
          top: "0%",
          left: "0%",
        }),
        e("#marker_pen_controls").css({
          position: "fixed",
          top: "0",
          "background-color": "",
          color: "black",
          right: 0,
        }),
        e("#marker_pen_hide_control").css({
          position: "fixed",
          bottom: "0",
          "background-color": "white",
          color: "rgb(0,0,0)",
          left: 0,
        }),
        e("#marker_pen_controls a").css({}),
        e("#markerPenCanvas").css({ opacity: n.opacity }),
        e("#marker_pen_controls a").hover(
          function () {
            e(this).css("background-color", "var(--clr-primary)");
          },
          function () {
            e(this).removeAttr("style"),
              e(this).css({
                cursor: "pointer",
              }),
              "marker" == d
                ? e("#markerbtn").css({
                    "background-color": "var(--clr-primary-dark)",
                  })
                : e("#eraserbtn").css({
                    "background-color": "var(--clr-primary-dark)",
                  });
          }
        ),
        e("#hidebtn").css({ opacity: "0.2", "pointer-events": "none" }),
        e("#marker_pen_svg").css({ position: "absolute" });
      var o,
        i,
        s,
        c = !1,
        d = "marker",
        l = 1,
        m = 0,
        g = 0;
      (s = document.getElementById("markerPenCanvas").getContext("2d")),
        (s.canvas.height =
          e(document).height() + e("#marker_pen_main").height() - 150),
        (s.canvas.width = e(document).width()),
        e("#markerPenCanvas").mousedown(function (n) {
          (c = !0),
            r(
              n.pageX - e(this).offset().left,
              n.pageY - e(this).offset().top,
              !1
            ),
            "eraser" == d &&
              r(
                n.pageX - e(this).offset().left,
                n.pageY - e(this).offset().top,
                !0
              );
        }),
        e("#markerPenCanvas").mousemove(function (n) {
          c &&
            r(
              n.pageX - e(this).offset().left,
              n.pageY - e(this).offset().top,
              !0
            );
        }),
        e("#markerbtn").css({ "border-bottom": "var(--border)" }),
        e("#markerPenCanvas").mouseup(function (e) {
          c = !1;
        }),
        e("#markerPenCanvas").mouseleave(function (e) {
          c = !1;
        }),
        e("#clearbtn").click(function () {
          t();
        }),
        e("#hidecontrols").click(function () {
          0 == g
            ? (e("#marker_pen_controls").animate({ left: "-100%" }),
              (document.getElementById("hidecontrols").innerHTML = ">"),
              (g = 1))
            : (e("#marker_pen_controls").animate({ left: "0%" }),
              (document.getElementById("hidecontrols").innerHTML = "<"),
              (g = 0));
        }),
        e("#markerbtn").click(function () {
          (d = "marker"),
            e("#markerbtn").css({ "border-bottom": "var(--border)" }),
            e("#eraserbtn").removeAttr("style"),
            e("#marker_pen_controls a").css({
              cursor: "pointer",
            });
        }),
        e("#eraserbtn").click(function () {
          (d = "eraser"),
            e("#eraserbtn").css({ "border-bottom": "var(--border)" }),
            e("#markerbtn").removeAttr("style"),
            e("#marker_pen_controls a").css({
              cursor: "pointer",
            });
        });
    },
  });
})(jQuery);
