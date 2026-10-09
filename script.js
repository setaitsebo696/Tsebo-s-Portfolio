

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {

        menuBtn.textContent = "✕";

    } else {

        menuBtn.textContent = "☰";

    }

});


/* CLOSE MOBILE MENU WHEN LINK IS CLICKED */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuBtn.textContent = "☰";

    });

});


/* =========================================
   DARK / LIGHT MODE
========================================= */

const themeBtn = document.getElementById("themeBtn");

const savedTheme =
    localStorage.getItem("portfolioTheme");

if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

    themeBtn.textContent = "☀️";

}


themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    const isDark =
        document.body.classList.contains("dark-mode");

    if (isDark) {

        themeBtn.textContent = "☀️";

        localStorage.setItem(
            "portfolioTheme",
            "dark"
        );

    } else {

        themeBtn.textContent = "🌙";

        localStorage.setItem(
            "portfolioTheme",
            "light"
        );

    }

});


/* =========================================
   TYPING ANIMATION
========================================= */

const typingText =
    document.getElementById("typingText");

const roles = [

    "System Developer",
    "Web Developer",
    "Programmer",
    "Problem Solver",
    "Technology Enthusiast"

];

let roleIndex = 0;
let characterIndex = 0;
let deleting = false;


function typeEffect() {

    const currentRole =
        roles[roleIndex];

    if (!deleting) {

        typingText.textContent =
            currentRole.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;

        if (
            characterIndex ===
            currentRole.length
        ) {

            deleting = true;

            setTimeout(
                typeEffect,
                1500
            );

            return;
        }

    } else {

        typingText.textContent =
            currentRole.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            roleIndex =
                (roleIndex + 1)
                % roles.length;

        }

    }

    setTimeout(
        typeEffect,
        deleting ? 50 : 90
    );
}

typeEffect();


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.15
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================
   ANIMATED COUNTERS
========================================= */

const counters =
    document.querySelectorAll(".counter");


const counterObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    const counter =
                        entry.target;

                    const target =
                        Number(
                            counter.dataset.target
                        );

                    let current = 0;

                    const increment =
                        target / 50;


                    const updateCounter =
                        () => {

                            current += increment;

                            if (
                                current <
                                target
                            ) {

                                counter.textContent =
                                    Math.ceil(current);

                                requestAnimationFrame(
                                    updateCounter
                                );

                            } else {

                                counter.textContent =
                                    target;

                            }

                        };


                    updateCounter();

                    counterObserver.unobserve(
                        counter
                    );

                }

            });

        },

        {
            threshold: 0.7
        }

    );


counters.forEach(counter => {

    counterObserver.observe(counter);

});


/* =========================================
   SKILL BAR ANIMATION
========================================= */

const skillBars =
    document.querySelectorAll(
        ".skill-progress"
    );


const skillObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    const bar =
                        entry.target;

                    bar.style.width =
                        bar.dataset.width;

                    skillObserver.unobserve(
                        bar
                    );

                }

            });

        },

        {
            threshold: 0.5
        }

    );


skillBars.forEach(bar => {

    skillObserver.observe(bar);

});


/* =========================================
   PROJECT FILTER
========================================= */

const filterButtons =
    document.querySelectorAll(
        ".filter-btn"
    );

const projects =
    document.querySelectorAll(
        ".project-card"
    );


filterButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            filterButtons.forEach(btn => {

                btn.classList.remove(
                    "active"
                );

            });

            button.classList.add(
                "active"
            );


            const filter =
                button.dataset.filter;


            projects.forEach(project => {

                const category =
                    project.dataset.category;


                if (
                    filter === "all" ||
                    category === filter
                ) {

                    project.style.display =
                        "block";

                    setTimeout(() => {

                        project.style.opacity =
                            "1";

                        project.style.transform =
                            "translateY(0)";

                    }, 50);

                } else {

                    project.style.opacity =
                        "0";

                    project.style.transform =
                        "translateY(15px)";

                    setTimeout(() => {

                        project.style.display =
                            "none";

                    }, 250);

                }

            });

        }
    );

});


/* =========================================
   CONTACT CHARACTER COUNTER
========================================= */

const message =
    document.getElementById("message");

const charCount =
    document.getElementById("charCount");


message.addEventListener("input", () => {

    charCount.textContent =
        message.value.length;

});


/* =========================================
   CONTACT FORM VALIDATION
========================================= */

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


contactForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();


        const name =
            document
                .getElementById("name")
                .value
                .trim();


        const email =
            document
                .getElementById("email")
                .value
                .trim();


        const messageValue =
            message.value.trim();


        if (
            name.length < 2
        ) {

            formMessage.textContent =
                "Please enter your name.";

            formMessage.style.color =
                "#ef4444";

            return;

        }


        if (
            !email.includes("@") ||
            !email.includes(".")
        ) {

            formMessage.textContent =
                "Please enter a valid email address.";

            formMessage.style.color =
                "#ef4444";

            return;

        }


        if (
            messageValue.length < 10
        ) {

            formMessage.textContent =
                "Your message should contain at least 10 characters.";

            formMessage.style.color =
                "#ef4444";

            return;

        }


        formMessage.textContent =
            "✓ Message validated successfully!";

        formMessage.style.color =
            "#22c55e";


        contactForm.reset();

        charCount.textContent = "0";

    }
);


/* =========================================
   LIVE CLOCK
========================================= */

function updateClock() {

    const clock =
        document.getElementById("clock");


    const now =
        new Date();


    const time =
        now.toLocaleTimeString(
            "en-ZA",
            {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: false
            }
        );


    clock.textContent =
        time + " SAST";

}


updateClock();

setInterval(
    updateClock,
    1000
);


/* =========================================
   FOOTER YEAR
========================================= */

document.getElementById(
    "footerYear"
).textContent =
    new Date().getFullYear();


/* =========================================
   SCROLL TO TOP
========================================= */

const scrollTopBtn =
    document.getElementById(
        "scrollTopBtn"
    );


window.addEventListener(
    "scroll",
    () => {

        if (
            window.scrollY > 500
        ) {

            scrollTopBtn.classList.add(
                "show"
            );

        } else {

            scrollTopBtn.classList.remove(
                "show"
            );

        }

    }
);


scrollTopBtn.addEventListener(
    "click",
    () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );


window.addEventListener(
    "scroll",
    () => {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 150;

            if (
                window.scrollY >=
                sectionTop
            ) {

                currentSection =
                    section.getAttribute(
                        "id"
                    );

            }

        });


        document
            .querySelectorAll(
                ".nav-links a"
            )
            .forEach(link => {

                link.classList.remove(
                    "active-link"
                );


                if (
                    link.getAttribute(
                        "href"
                    ) ===
                    "#" + currentSection
                ) {

                    link.classList.add(
                        "active-link"
                    );

                }

            });

    }
);
