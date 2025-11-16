"use strict";

// Load event to execute code after the page has fully loaded
window.addEventListener("load", () => {
  loadInitialSetup(); // Load initial setup
});

/* ----------> Initial Setup <---------- */

const loadInitialSetup = () => {
  // Loader
  loader(); // Load the loader

  // Events
  setupClickEvents(); // Setup click events
  setupScrollEvents(); // Setup scroll events
  setupResizeEvents(); // Setup resize events

  // Funcitons
  closeModal(); // Close modal
  tabs(); // Tabs
  progressbar(); // Progressbar
  resetProgressbar(); // Reset Progressbar
  currentYear(); // Current Year
  toggleCheckAll(); // Toggle check all
  scrollUp(); // Scroll to up
  searchMob(); // Open / Close Search in mobile
  counter(); // Counter
  restrictNumberInput(); // Restrict number input
  seeMore(); // See more
  notifyResendCode(); // Notify Resend Code

  // Plugins
  carousel(); // Carousel
  filtering(); // Filter
  rater(); // Rate
  popup(); // Popper
  select(); // Select input
  // sendEmail(); // Send Email
  accordion(); // Accordion
};

/* ----------> Variables <---------- */

let stepCounter = 0;

/* ----------> Event Setup <---------- */

const setupClickEvents = () => {
  window.addEventListener("click", ({ target }) => {
    calculatePositionTab(target);
    showModal(target); // Show modal if clicked on an element with 'data-target' attribute
    clickOverlay(target); // Close modal if clicked on modal overlay
    heartBeat(target); // Perform heartbeat animation if clicked on a "wishlist" button
    toggleCheck(target); // Toggle checkbox
  });
};

const setupScrollEvents = () => {
  window.addEventListener("scroll", () => {
    scrollUpButton();
  });
};

const setupResizeEvents = () => {
  window.addEventListener("resize", ({ target }) => {
    resizeModal(target);
  });
};

/* ----------> Functions <---------- */

// Show modal corresponding to clicked element
const showModal = (target) => {
  const dataTarget = target.getAttribute("data-target");

  if (dataTarget) {
    const modal = `${dataTarget}.modal-container`;
    const modalContainer = document.querySelector(modal);

    if (modalContainer) {
      const modalContent = modalContainer.querySelector(".modal-content");

      const modalClasses = [
        "modal-top",
        "modal-right",
        "modal-left",
        "modal-center",
        "modal-center-top",
      ];

      modalClasses.forEach((modalClass) => {
        modalContent.classList.toggle(
          `${modalClass}_active`,
          modalContent.classList.contains(modalClass)
        );
      });

      modalContainer.classList.toggle("modal-overlay_active");
      document.body.classList.toggle("overflow-hidden");
    }
  }
};

// Function to close modal
const closeModal = () => {
  const modalCloseButtons = document.querySelectorAll(".close-modal");
  modalCloseButtons.forEach((btn) => {
    btn.addEventListener("click", ({ target }) => {
      const modalContainer = target.closest(".modal-container");
      const modalContent = modalContainer.querySelector(".modal-content");

      modalContent.classList.remove(
        "modal-top_active",
        "modal-right_active",
        "modal-left_active",
        "modal-center_active",
        "modal-center-top_active"
      );
      modalContainer.classList.remove("modal-overlay_active");
      document.body.classList.remove("overflow-hidden");
    });
  });
};

// Close modal if clicked on modal overlay
const clickOverlay = (target) => {
  const overlay = target.classList.contains("modal-overlay");
  const modal = target.querySelector(".modal-content");

  if (overlay && modal) {
    const closeButton = modal.querySelector(".close-modal");
    closeButton && closeButton.click();
  }
};

// Close all modals when window is resized to width greater than 1023px
const resizeModal = (target) => {
  if (target.innerWidth > 1023) {
    const buttons = document.querySelectorAll(
      ".resize-close.modal-overlay_active .close-modal"
    );

    buttons.forEach((button) => {
      if (button) {
        button.click();
      }
    });
  }
};

// Configure loading animation
const loader = () => {
  setTimeout(() => {
    const loader_content = document.querySelector(".loader-content");
    loader_content.classList.add(
      "transition-all",
      "duration-500",
      "opacity-0",
      "invisible"
    );
  }, 500);

  setTimeout(() => {
    const loader = document.querySelector(".loader");
    const body = document.querySelector("body");
    loader.classList.add(
      "transition-all",
      "duration-1000",
      "opacity-0",
      "invisible"
    );
    body.classList.remove("overflow-hidden");
  }, 800);
};

// Configure tabs
const tabs = () => {
  const tabsContainers = document.querySelectorAll(".tab-container");

  tabsContainers.forEach((container) => {
    const tabItems = container.querySelectorAll(".tab-item");
    const tabsContent = container.querySelectorAll(".tab-content-item");

    tabItems &&
      tabItems.forEach((tabButton, index) => {
        tabButton.addEventListener("click", () => {
          tabItems.forEach((button, i) => {
            tabsContent[i].classList.remove("active");
            button.classList.remove("active");
          });

          tabsContent[index].classList.add("active");
          tabButton.classList.add("active");
        });
      });
  });
};

// Calculates the tab position to switch to when an element with 'data-tab' attribute is clicked
const calculatePositionTab = (target) => {
  if (!target.hasAttribute("data-tab")) {
    return;
  }

  const position = target.getAttribute("data-tab");
  const tabItems = document.querySelectorAll(".tab-container-entry .tab-item");
  tabItems[position].click();
};

// Controls the behavior of the progress bar in the steps of a process

const progressbar = () => {
  const stepContainers = document.querySelectorAll(".step-container");
  stepContainers.forEach((element) => {
    const stepsContent = element.querySelectorAll(".step-content");
    const buttonsPrev = element.querySelectorAll(".prev-step");
    const buttonsNext = element.querySelectorAll(".next-step");
    const progressbar = element.querySelectorAll(".progressbar > div");

    buttonsPrev.forEach((buttonPrev) => {
      buttonPrev.addEventListener("click", () => {
        if (stepCounter > 0) {
          stepCounter--;
          stepUpdate(stepsContent, stepCounter, progressbar, "prev");
        }
      });
    });

    buttonsNext.forEach((buttonNext) => {
      buttonNext.addEventListener("click", () => {
        if (stepCounter < stepsContent.length - 1) {
          stepCounter++;
          stepUpdate(stepsContent, stepCounter, progressbar, "next");
        }
      });
    });
  });
};

// Updates the status of the steps in a process, including the progress bar, based on the action taken (previous or next)
const stepUpdate = (stepsContent, stepCounter, progressbar, action) => {
  stepsContent.forEach((step) => step.classList.remove("active"));
  stepsContent[stepCounter].classList.add("active");

  const parent = stepsContent[stepCounter].closest(".step-container");
  const stepNumbers = parent.querySelectorAll(".step-number div");

  if (action === "next") {
    progressbar[stepCounter - 1].classList.replace("w-0", "w-full");
    stepNumbers[stepCounter].classList.add("active");
  } else if (action === "prev") {
    progressbar[stepCounter].classList.replace("w-full", "w-0");
    stepNumbers[stepCounter + 1].classList.remove("active");
  }
};

// Resets the state of the progress bar and steps of a process at startup
const resetProgressbar = () => {
  const resetButtons = document.querySelectorAll(".reset-progressbar");

  resetButtons.forEach((element) => {
    element.addEventListener("click", ({ currentTarget }) => {
      setTimeout(() => {
        const parent = document.querySelector(
          currentTarget.getAttribute("data-target")
        );
        const progressbar = parent.querySelectorAll(".progressbar div");
        const step_number = parent.querySelectorAll(".step-number div");
        const steps_content = parent.querySelectorAll(".step-content");

        progressbar.forEach((e) => {
          e.classList.replace("w-full", "w-0");
        });

        steps_content.forEach((e, i) => {
          e.classList.remove("active");
          step_number[i].classList.remove("active");
        });

        stepCounter = 0;
        steps_content[0].classList.add("active");
        step_number[0].classList.add("active");
      }, 300);
    });
  });
};

// Perform heartbeat animation if clicked on a "wishlist" button
const heartBeat = (target) => {
  if (!target.classList.contains("wishlist-button")) return;

  const icon = target.querySelector("i.bi-heart, i.bi-heart-fill");
  if (!icon) return;

  icon.classList.toggle("bi-heart");
  icon.classList.toggle("bi-heart-fill");
  icon.classList.toggle("animate-heartscale");
};

// Set current year
const currentYear = () => {
  const currentYear = document.querySelectorAll(".current-year");
  currentYear.forEach((element) => {
    element.textContent = new Date().getFullYear();
  });
};

// Toggle check all checkboxes and update "Select All" element state
const toggleCheckAll = () => {
  const checkboxes = document.querySelector("#check-all");
  checkboxes &&
    checkboxes.addEventListener("click", ({ currentTarget }) => {
      const checkbox = currentTarget;
      const check_product = document.querySelectorAll(".check-product");
      check_product.forEach((element) => {
        checkbox.checked ? (element.checked = true) : (element.checked = false);
      });
    });
};

// Toggle a checkbox and update "Select All" element state
const toggleCheck = (target) => {
  if (!target.classList.contains("check-product")) return;

  const check_all = document.querySelector("#check-all");
  const checkboxes = document.querySelectorAll(".check-product");

  const id_product = target.id;
  const text = id_product.includes("desktop")
    ? id_product.replace("desktop", "mobile")
    : id_product.replace("mobile", "desktop");
  const second_check = document.querySelector(`#${text}`);

  second_check.checked = target.checked;

  const checkboxes_checked = document.querySelectorAll(
    ".check-product:checked"
  );

  check_all.checked = checkboxes_checked.length === checkboxes.length;
};

// Make "Go top" button appear/disappear when scrolling down
const scrollUpButton = () => {
  const button = document.querySelector(".scroll-up");
  if (document.documentElement.scrollTop > 500) {
    button.classList.remove("-bottom-16");
    button.classList.add("z-40", "bottom-8");
  } else {
    button.classList.remove("z-40", "bottom-8");
    button.classList.add("-bottom-16");
  }
};

// Go top button functionality
const scrollUp = () => {
  const button = document.querySelector(".scroll-up");
  button &&
    button.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
};

// Open/Close Search
const searchMob = () => {
  const element = document.querySelector(".btn-search-mob");
  element &&
    element.addEventListener("click", () => {
      document.querySelector(".header-search").classList.toggle("hidden");
    });
};

// Configure quantity counter
const counter = () => {
  const counter = document.querySelectorAll(".counter");

  counter.forEach((element) => {
    const value = element.querySelector(".counter-value");

    element.addEventListener("click", ({ target }) => {
      if (target.classList.contains("increment")) {
        value.value++;
      } else if (target.classList.contains("decrement") && value.value > 0) {
        value.value--;
      }
    });
  });
};

// Restrict number input in number type input fields
const restrictNumberInput = () => {
  const inputNumber = document.querySelectorAll('input[type="number"]');
  inputNumber.forEach((element) => {
    element.addEventListener("onpaste", (e) => e.preventDefault());

    element.addEventListener("keydown", (e) => {
      if (isNaN(parseInt(e.key)) && e.keyCode != 8) {
        return e.preventDefault();
      }
    });
  });
};

// See more functionality
const seeMore = () => {
  const element = document.querySelectorAll(".btn-see-more");

  element.forEach((element) => {
    element.addEventListener("click", (e) => {
      const father = e.currentTarget.closest(".see-more");
      const see_more_container = father.querySelector(".see-more-container");
      const see_more_content = father.querySelector(".see-more-content");
      const icon_rotate = father.querySelector("i");

      see_more_container.classList.toggle("gradient-bottom");
      icon_rotate.classList.toggle("rotate-180");

      see_more_container.style.transition = "max-height 1s ease";
      see_more_container.style.maxHeight = see_more_content.offsetHeight + "px";

      let duration = see_more_container.style.transitionDuration;

      if (duration.includes("ms")) {
        duration = parseInt(duration);
      } else if (duration.includes("s")) {
        duration = 1000 * parseFloat(duration);
      }

      if (icon_rotate.classList.contains("rotate-180")) {
        setTimeout(
          () => (see_more_container.style.maxHeight = "max-content"),
          duration
        );
      } else {
        setTimeout(() => (see_more_container.style.maxHeight = ""), 10);
      }
    });
  });
};

/* ----------> Function Libraries <---------- */

// Metis Menu
const accordion = () => {
  const elements = document.querySelectorAll(".metismenu");

  elements.forEach((element) => {
    if (!element) return;

    new MetisMenu(element, {
      triggerElement: ".sub-metismenu",
      subMenu: ".metismenu-content",
    });

    document.addEventListener("click", (event) => {
      const isClickInsideMenu = element.contains(event.target);

      if (!isClickInsideMenu) {
        const actives = element.querySelectorAll('[aria-expanded="true"]');

        actives.forEach((active) => {
          active.click();
        });
      }
    });
  });
};

// Swiper Slider
const carousel = () => {
  /* -> Swiper Slider <- */
  const element = document.querySelector(".swiper");

  /* Slider Banner */
  element &&
    new Swiper(".swiper-banner", {
      spaceBetween: 30,
      centeredSlides: true,
      loop: true,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
      },
    });

  /* Slider Categories */
  element &&
    new Swiper(".swiper-default", {
      spaceBetween: 30,
      centeredSlides: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

  /* Slider Offers */
  element &&
    new Swiper(".swiper-cards-1", {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      breakpoints: {
        560: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        760: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
      navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
      },
    });

  /* Slider Cards */
  element &&
    new Swiper(".swiper-cards-2", {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      breakpoints: {
        560: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        760: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
      navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
      },
    });

  /* Slider Brands */
  element &&
    new Swiper(".swiper-brands", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      breakpoints: {
        340: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        440: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        540: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 7,
          spaceBetween: 20,
        },
      },
      navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
      },
    });

  /* Slider Product */
  const thumbs = document.querySelectorAll(".swiper-thumbs");
  const swipper_top = document.querySelectorAll(".swiper-top");

  thumbs &&
    thumbs.forEach((thumbs, index) => {
      if (!thumbs) {
        return;
      }
      const gallery = new Swiper(thumbs, {
        spaceBetween: 10,
        slidesPerView: 4,
        watchSlidesProgress: true,
      });

      const swiper = new Swiper(swipper_top[index], {
        spaceBetween: 10,
        effect: "fade",
        allowTouchMove: false,
        zoom: {
          maxRatio: 2,
          toggle: true,
        },
        fadeEffect: {
          crossFade: true,
        },
        navigation: {
          nextEl: ".button-next",
          prevEl: ".button-prev",
        },
        thumbs: {
          swiper: gallery,
        },
      });

      swiper.slides.forEach((thumbs) => {
        thumbs.addEventListener("mouseover", function (e) {
          swiper.zoom.in();
        });

        thumbs.addEventListener("mouseout", function (e) {
          swiper.zoom.out();
        });
      });
    });
};

// MixitUp
const filtering = () => {
  const element = document.querySelector(".mix-container");
  if (!element) {
    return;
  }

  const mixer = mixitup(".mix-container", {
    selectors: {
      target: ".mix",
    },
    animation: {
      duration: 300,
    },
  });

  const gridContainer = document.querySelector(".mix-shop");

  if (gridContainer) {
    mixer.filter(".mix-grid");
  } else {
    mixer.filter(".mix-all");
  }
};

// Rater Js
const rater = () => {
  const elements = document.querySelectorAll("[data-rater]");

  elements.forEach((e) => {
    const value = parseInt(e.getAttribute("data-rater"));

    const rating = new raterJs({
      element: e,
      showToolTip: false,
      max: 5,
      starSize: 14,
      readOnly: true,
    });

    rating.setRating(value);
  });

  const element = document.querySelector("#rater");
  if (!element) {
    return;
  }

  let myRating = raterJs({
    element: element,
    rateCallback: function rateCallback(rating, done) {
      this.setRating(rating);
      done();
    },
    starSize: 32,
    step: 0.5,
  });

  /* Get the result */
  const form_review = document.querySelector(".form-review");
  form_review &&
    form_review.addEventListener("submit", (e) => {
      document.querySelector(".rating-value").value = myRating.getRating();
    });
};

// Tippy
const popup = () => {
  /* Modal - Button Wishlist */
  const element = document.querySelector(".tippy");
  element &&
    tippy(".tippy-wishlist", {
      content: "Add to wishlist",
    });

  /* Icon Trash Remove */
  element &&
    tippy(".tippy-remove", {
      content: "Remove",
    });

  /* Icon Pen Edit */
  element &&
    tippy(".tippy-edit", {
      content: "Edit",
    });

  /* Card - Button Wishlist */
  element &&
    tippy(".tippy-left-wishlist", {
      placement: "left",
      content: "Add to wishlist",
    });

  /* Card - Button Quick View */
  element &&
    tippy(".tippy-left-card-view", {
      placement: "left",
      content: "Quick view",
      zIndex: 1,
    });

  /* Shop - Grid Icon */
  element &&
    tippy(".tippy-grid", {
      content: "Grid view",
    });

  /* Shop - List Icon */
  element &&
    tippy(".tippy-list", {
      content: "List view",
    });
};

// Nice Select2
const select = () => {
  const selects = document.querySelectorAll(".nice-select");
  selects.forEach((select) => {
    if (select.classList.contains("country")) {
      NiceSelect.bind(select, {
        placeholder: "Country",
      });
    }
    if (select.classList.contains("order-by")) {
      NiceSelect.bind(select, {
        placeholder: "Order by",
      });
    }
    if (select.classList.contains("card-payment")) {
      NiceSelect.bind(select, {
        placeholder: "Card",
      });
    }
  });
};

// Izi Toast
const notifyMessage = () => {
  iziToast.show({
    message: "Message sent successfully!",
    position: "topRight",
    color: "rgb(34 197 94 / 70%",
    icon: "bi-check-circle-fill",
    iconColor: "#fff",
    titleColor: "#fff",
    messageColor: "#fff",
  });
};

// Izi Toast
const notifyResendCode = () => {
  const resendCode = document.querySelector(".resend-code");
  resendCode &&
    resendCode.addEventListener("click", () => {
      iziToast.show({
        message: "The code has been resent",
        position: "topRight",
        color: "rgb(34 197 94 / 70%",
        icon: "bi-check-circle-fill",
        iconColor: "#fff",
        titleColor: "#fff",
        messageColor: "#fff",
      });
    });
};

// Email JS
const sendEmail = () => {
  const btn = document.querySelector("#submit-button");
  const element = document.querySelector("#contact-form");

  element &&
    element.addEventListener("submit", (e) => {
      e.preventDefault();

      btn.innerHTML = `<span class="relative z-[4] font-bold uppercase text-white">Sending...</span>`;

      const serviceID = "YOUR_SERVICE_ID";
      const templateID = "YOUR_TEMPLATE_ID";

      emailjs.sendForm(serviceID, templateID, element).then(
        () => {
          btn.innerHTML = `<span class="relative z-[4] font-bold uppercase text-white">Send Message</span>`;
          notifyMessage();
        },
        (err) => {
          btn.innerHTML = `<span class="relative z-[4] font-bold uppercase text-white">Send Message</span>`;
          alert(JSON.stringify(err));
        }
      );
    });
};

const contactFormMain = document.querySelector('#contact-form');
function onSubmitForm(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData.entries());
  const query = new URLSearchParams(data).toString();

  fetch('/api/contact?' + query)
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      notifyMessage('Form submitted successfully!');
      event.target.reset();
    }else{
      notifyMessage('Error submitting form...'); 
    }
  });

}
if(contactFormMain) {
  contactFormMain.addEventListener('submit', onSubmitForm);
}

const signUpForm = document.getElementById('sign-up-form');

function onSubmitSignUpForm(event) {
  event.preventDefault();
  const name = document.querySelector('input[name=username]');
  const email = document.querySelector('input[name=email]');
  const password = document.querySelector('input[name=password');
  const confirmPassword = document.querySelector('input[name=password2]');
  let isError = false;

  if (name && name.value.trim() === '') {
    notifyMessage('Name can not be empty');
    isError = true;
  }
  if (email && email.value.trim() === '') {
    notifyMessage('Email can not be empty');
    isError = true;
  }
  if (password && password.value.trim() === '') {
    notifyMessage('Password can not be empty');
    isError = true;
  }
  if (confirmPassword && confirmPassword.value.trim() === '') {
    notifyMessage('Confirm password can not be empty');
    isError = true;
  }

  if (isError){
    return false;
  }

  this.submit();
}

if(signUpForm){
  signUpForm.addEventListener('submit', onSubmitSignUpForm);
}
