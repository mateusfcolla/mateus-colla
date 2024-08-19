<template lang="pug">

a.project( :href="props.url" target="_blank" )
    img( :src="props.background" :alt="props.title" )
    .project_details
        .header
            h3 {{ props.title }}
            .subtitle {{ props.subtitle }}
        p {{  props.description  }}.
        .technologies
            slot


</template>

<script setup>

const props = defineProps(['title', 'subtitle', 'description', 'background', 'url'])

</script>


<style lang="scss" scoped>

.project {
    width: fit-content;
    height: fit-content;
    position: relative;
    overflow: hidden;
    box-shadow: 0px 0px 10px rgb(225, 225, 225);
    border-radius: .3rem;

    &::before {
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.839);
        content: "";
        top: 0;
        left: 0;
        position: absolute;
        opacity: 0;
        transition: .3s ease-in-out;
    }

    &_details {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        columns: white;
        color: #FFF;
        position: absolute;
        bottom: -3.13rem;
        left: 4.44rem;
        width: 40%;
        opacity: 0;
        transition: .4s ease-in-out;
        transition-delay: .1s;

        .header {
            display: flex;
            align-items: center;
            gap: 0.5rem;

            h3 {
                font-size: 2.44569rem;
                font-style: normal;
                font-weight: 600;
                line-height: normal;
            }

            .subtitle {
                font-size: 1rem;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                color: #C8C8C8;
                padding-top: .1rem;
            }
        }

        p {
            font-size: 1.125rem;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            text-align: left;
            color: #eaeaea;
        }

        .technologies {
            display: flex;
            gap: 0.5625rem;
        }
    }

    &:hover {
        &::before {
            opacity: 1;
        }

        .project_details {
            opacity: 1;
            bottom: 3.13rem;
        }
    }

}
</style>