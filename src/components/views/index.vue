<template>
    <div id="portfolio">
    <header class="header">
        <a href="#" class="logo">yekhaung~</a>

        <nav class="navbar">
            <a href="#home">Home </a>
            <a href="#projects">Projects </a>
            <a href="#contact">Contact Me </a>
            <a href="#about">About Me</a>
        </nav>
    </header>

    <section class="home" id="home">
        <div class="home-content">
            <h1>Hi, I'm Ye Khaung.</h1>
            <h3>Software Developer</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque accusantium ab eum doloribus dicta odio laudantium. Saepe voluptatem possimus, quas molestias unde assumenda similique architecto voluptate corrupti.</p>
        </div>

        <div class="home-sci">
            <a href="#"><box-icon type='logo' class="iconcolor" color="#00abf0" name='facebook'></box-icon></a>
            <a href="#"><box-icon name='twitter' class="iconcolor" color="#00abf0" type='logo' ></box-icon></a>
            <a href="#"><box-icon name='linkedin' class="iconcolor" color="#00abf0" type='logo' ></box-icon></a>
            <!-- <a href=""><i class='bx bxl-linkedin' ></i></a> -->
        </div>
    </section>

    <div class="projects" id="projects">
       <p>Projects</p>
    </div>

    <div class="contact" id="contact">
        <p>Contact Me</p>
    </div>

    <div class="about" id="about">
        <p>About Me!</p>
    </div>

    </div>
</template>

<script>
import 'boxicons'
export default {
  name: 'HomePage',
}
</script>
