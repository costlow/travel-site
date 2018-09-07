import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
  constructor() {
    this.lazyImages = $(".lazyload");
    this.refreshWaypoints();
    this.siteHeader = $(".site-header");
    this.headerBreakPoint = $(".large-hero__title");
    this.createHeaderWaypoint();
    this.pageSections = $(".page-section");
    this.headerLinks = $(".primary-nav a");
    this.addSmoothScrolling();
    this.createPageSectionWaypoints();
  }

  refreshWaypoints() {
    this.lazyImages.on('load', function() {
      Waypoint.refreshAll();
    });
  }

  addSmoothScrolling() {
    this.headerLinks.smoothScroll();
  }

  createHeaderWaypoint() {
    var base = this;
    new Waypoint({
      element: base.headerBreakPoint[0],
      handler: function(direction) {
        if (direction == "down") {
          base.siteHeader.addClass("site-header--dark");
        } else {
          base.siteHeader.removeClass("site-header--dark");
        }
      },
    });
  }

  createPageSectionWaypoints() {
    var base = this;
    this.pageSections.each(function() {
      var currentPageSection = this;
      new Waypoint({
        element: currentPageSection,
        handler: function(direction) {
          if (direction == "down") {
            var matchingLink = currentPageSection.getAttribute('data-matching-link');
            base.headerLinks.removeClass("is-current-link");
            $(matchingLink).addClass("is-current-link");
          }
        },
        offset: "18%",
      });

      new Waypoint({
        element: currentPageSection,
        handler: function(direction) {
          if (direction == "up") {
            var matchingLink = currentPageSection.getAttribute('data-matching-link');
            base.headerLinks.removeClass("is-current-link");
            $(matchingLink).addClass("is-current-link");
          }
        },
        offset: "-40%",
      });

    });
  }
}

export default StickyHeader;
