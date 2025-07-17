<template lang="pug">

section#experiences
    h2#experiencestitle.title Experiences
    Splide( :options="SplideOptions" :has-track="false" aria-labelledby="#experiencestitle" ).experiences.experiences__desktop
        SplideTrack
            SplideSlide.experience( v-for="experience, index in experiences" :key="`experience${index}`" )
                p {{ experience.time }}
                h4 {{ experience.title }}
                ul
                    li( v-for="doing in experience.doings" ) {{ doing }}
    .experiences.experiences__mobile
        .experience.is-active( v-for="experience, index in experiences" :key="`experience${index}`" )
            p {{ experience.time }}
            h4 {{ experience.title }}
            ul
                li( v-for="doing in experience.doings" ) {{ doing }}
</template>

<script setup>

import { Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css/core';


const SplideOptions = {
    perPage: 1,
    type: 'loop',
    pagination: false,
    rewindByDrag: true,
    fixedWidth: '70rem',
    arrowPath: 'M16.8929 13.6928C17.2834 13.3023 17.9166 13.3023 18.3071 13.6928L23.9071 19.2928C24.0946 19.4803 24.2 19.7347 24.2 19.9999C24.2 20.2651 24.0946 20.5195 23.9071 20.707L18.3071 26.307C17.9166 26.6975 17.2834 26.6975 16.8929 26.307C16.5023 25.9165 16.5023 25.2833 16.8929 24.8928L21.7858 19.9999L16.8929 15.107C16.5023 14.7165 16.5023 14.0833 16.8929 13.6928Z'
}

const experiences = [
    {
        time: 'october 2024 - today',
        title: 'Senior Web Developer, Freelance',
        doings: [
            'Reduced API call times by an average of 80% through advanced data prefetching, query optimization, and custom caching policies.',
            'Boosted Core Web Vitals by adding skeleton loaders, lazy loading, and pagination for large datasets.',
            'Integrated responsive PDF viewer with mobile optimization for smoother user access.',
            'Created reusable React component libraries using Context API and Hooks.',
            'Automated WordPress deployments to Vercel, enabling instant content updates after key changes.',
            'Engineered custom Gutenberg blocks and advanced ACF setups for modular, flexible content editing.',
            'Enhanced app integrations ( chatbot, UTM tracking, VWO A/B tests) and implemented structured SEO strategies including meta tags and rich schema.',
            'Implemented secure CI/CD pipelines with GitHub Actions.'
        ],
    },
    {
        time: 'july 2024 - october 2024',
        title: 'Web Developer, Mosyle ( Assetbots )',
        doings: [
            "Built component-based UIs aligned with Figma designs using MUI and Styled Components.",
            "Added features and enhancements to core interfaces using TypeScript and React.",
            "Implemented and Improved A/B tests to measure UX changes and guide product improvements.",
            "Upgraded backend APIs to support interactive features and secure data handling.",
        ],
    },
    {
        time: 'april 2024 - october 2024',
        title: 'Web Developer Freelance, WKode',
        doings: [
            'Built modular WordPress themes and custom ACF/Gutenberg blocks enabling flexible content management for 30+ websites.',
            "Engineered custom Gutenberg blocks using React, TypeScript, and WordPress REST API for dynamic content editing.",
            "Led development of headless architectures integrating WPGraphQL and microfrontend SPAs with React.",
            "Built scalable component libraries using Hooks and Context API, improving developer efficiency.",
            "Implemented secure CI/CD pipelines with GitHub Actions and Docker.",
            "Improved performance and maintainability for headless WordPress SPAs with microfrontend architectures.",
            "Integrated secure authentication using OAuth and built APIs with Express.js and GoLang ( Gin ).",
            "Enhanced SEO with SSR, schema markup, and Lighthouse audits."
        ],
    },
    {
        time: 'april 2021 - april 2024',
        title: 'Web Developer & UI/UX Designer,  JettaCargo',
        doings: [
            "Built a 3D editor UI modeled after Blender, improving usability for customized cargo planning.",
            'Created a microservice to dynamically generate PDF cargo reports, offering API-first users report access.',
            'Designed and integrated a full onboarding tutorial system, reducing user drop-off during first-time interactions.',
            'Led a complete UI/UX redesign of the company’s core web app for a more modern and intuitive interface.',
            'Rebuilt corporate website in Nuxt.js, focusing on SEO and responsive UX.',
            'Upgraded backend APIs to support interactive features and secure data handling.',
            'Created reusable Vue component libraries, improving Component-Based architecture on the main webapp.',
            'Implemented a custom chatbot and support ticket integration within the webapp.',
        ],
    },
    {
        time: 'march 2020 - april 2021',
        title: 'Front End Wordpress Developer,  Escritolândia',
        doings: [
            "Designed and developed a custom e-commerce website from scratch using WordPress and WooCommerce.",
            "Built a fully custom theme with a UI inspired by MercadoLivre and Amazon, optimized for conversion and speed.",
            "Engineered dynamic Gutenberg blocks and ACF layouts to allow flexible content and product management.",
            "Developed an integration between the website and the company’s internal system to sync product data and pricing in real time.",
            "Implemented secure payment APIs to support various checkout flows.",
            "Created icon fonts to reduce HTTP requests and improve overall load performance.",
            "Led SEO strategies like schema markup, optimized image formats, improved loading speed, and structured internal links.",
            "Set up tracking and behavior analytics using Google Analytics and Google Search Console to optimize product visibility.",
            "Designed marketing materials and product images using Adobe tools.",
            "Managed cloud infrastructure and DNS configurations, ensuring uptime and scalability.",
            "Launched and monitored promotional campaigns with automated discounts and banners.",
        ],
    },
]

</script>

<style lang="scss">

#experiences {
    padding-bottom: 8rem;
}

h2.title {
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 3rem;
}

.experiences {
    position: relative;
    overflow: hidden;

    &__mobile {
        display: none;
    }

    @media screen and (max-width: 1028px) {

        &__mobile {
            display: unset;
        }

        &__desktop {
            display: none;
        }
    }

    .splide__arrow {
        position: absolute;
        background: #FFF;
        border: 1px solid #C5C5C5;
        border-radius: 100%;
        width: 3.125rem;
        height: 3.125rem;
        z-index: 6;
        cursor: pointer;
        top: 50%;
        right: .4rem;
        transition: .3s;
        justify-content: center;
        align-items: center;
        transform: translateY(-50%);

        &:hover {
            background: #bfbfbf;
        }

        svg {
            path {
                width: auto;
                height: auto;
            }
        }

        &--prev {
            display: none;
        }
    }
}

.experience {
    display: flex;
    padding: 1.5rem;
    flex-direction: column;
    align-items: flex-start;
    // gap: 1rem;
    flex-shrink: 0;
    border: 1px solid #4D4D4D;
    opacity: .6;
    margin-right: 2rem;

    p {
        color: #E7E7E7;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 400;
        line-height: 160%;
    }

    h4 {
        color: #F9F9F9;
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 700;
        line-height: 160%;
        margin-bottom: 1rem;
    }

    ul {

        margin-left: 1.5rem;

        li {
            color: #AFAFAF;
            font-size: 1.1875rem;
            font-style: normal;
            font-weight: 400;
            line-height: 160%;
        }

    }

    .techs {
        display: flex;
        gap: 1rem;
        margin-top: 1.5rem;
        margin-left: 1.5rem;
        flex-wrap: wrap;

        .technology_wrapper {
            pointer-events: none;
        }
    }

    &.is-active {
        opacity: 1;

        .technology_wrapper {
            pointer-events: all;
        }
    }

    @media screen and (max-width: 1028px) {
        margin-right: 0;
        margin-bottom: 2rem;
        text-align: center;

        p {
            width: 100%;
            margin-bottom: .4rem;
            color: #616161;
        }

        ul {
            list-style-type: none;
            margin-left: 0;
        }

        li {
            margin: 1rem 0;
        }
    }
}

</style>