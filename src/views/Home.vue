<template>
  <div class="home">
    <!-- Slideshow container -->
    <div class="slideshow-container">
      <!-- Full-width images with number and caption text -->
      <div class="mySlides fade" :style="styleObject[0].img">
        <img src="https://www.w3schools.com/howto/img_nature_wide.jpg" style="width:100%" />
        <div class="text">Caption Text</div>
      </div>

      <div class="mySlides fade" :style="styleObject[1].img">
        <img src="https://www.w3schools.com/howto/img_snow_wide.jpg" style="width:100%" />
        <div class="text">Caption Two</div>
      </div>

      <div class="mySlides fade" :style="styleObject[2].img">
        <img src="https://www.w3schools.com/howto/img_lights_wide.jpg" style="width:100%" />
        <div class="text">Caption Three</div>
      </div>

      <div class="mySlides fade" :style="styleObject[3].img">
        <img src="https://www.w3schools.com/howto/img_mountains_wide.jpg" style="width:100%" />
        <div class="text">Caption Four</div>
      </div>

      <!-- Next and previous buttons -->
      <a class="prev" @click="plusSlides(-1)">&#10094;</a>
      <a class="next" @click="plusSlides(1)">&#10095;</a>
    </div>
    <br />

    <!-- The dots/circles -->
    <div style="text-align:center">
      <span class="dot" :style="styleObject[0].dot" @click="currentSlide(1)"></span>
      <span class="dot" :style="styleObject[1].dot" @click="currentSlide(2)"></span>
      <span class="dot" :style="styleObject[2].dot" @click="currentSlide(3)"></span>
      <span class="dot" :style="styleObject[3].dot" @click="currentSlide(4)"></span>
    </div>
    <div class="mySlides chayngang">
        <!-- <img src="https://www.w3schools.com/howto/img_nature_wide.jpg" style="width:100%" /> -->
        <div class="chayngangtext">Caption Text</div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      styleObject: [
        { img: { display: "block" }, dot: { backgroundColor: "#717171" } },
        { img: { display: "none" }, dot: { backgroundColor: "#bbb" } },
        { img: { display: "none" }, dot: { backgroundColor: "#bbb" } },
        { img: { display: "none" }, dot: { backgroundColor: "#bbb" } }
      ],
      slideIndex: 1,
      count: 1
    };
  },
  methods: {
    // Next/previous controls
    plusSlides: function(n) {
      this.showSlides((this.slideIndex += n));
    },

    // Thumbnail image controls
    currentSlide: function(n) {
      this.showSlides((this.slideIndex = n));
    },

    showSlides: function(n) {
      console.log("time");

      var i;
      if (n > this.styleObject.length) {
        this.slideIndex = 1;
      }
      if (n < 1) {
        this.slideIndex = this.styleObject.length;
      }
      for (i = 0; i < this.styleObject.length; i++) {
        this.styleObject[i].img.display = "none";
        this.styleObject[i].dot.backgroundColor = "#bbb";
      }
      this.styleObject[this.slideIndex - 1].img.display = "block";
      this.styleObject[this.slideIndex - 1].dot.backgroundColor = "#717171";
    }
  },
  mounted() {
    setInterval(() => {
      this.slideIndex++;
      this.showSlides(this.slideIndex);
    }, 3000);
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

.slideshow-container {
  position: relative;
  margin: auto;
}

/* Next & previous buttons */
.prev,
.next {
  top: 50%;
  position: absolute;
  cursor: pointer;
  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
  margin-top: -22px;
}

/* Position the "next button" to the right */
.prev {
  left: 0;
}

.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

/* Caption text */
.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 20px;
  width: 100%;
  text-align: center;
}

/* The dots/bullets/indicators */
.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color gray;
}

/* .active, */
.dot:hover {
  background-color: #717171;
}

/* Fading animation */
.fade {
  animation-name: fade;
  animation-duration: 1.5s;
}

@keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}
</style>