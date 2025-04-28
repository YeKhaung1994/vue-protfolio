<template>
    <div id="portfolio">
        <header class="header">
            <a href="#" class="logo">yekhaung~</a>
            <!-- <div class="menu-toggle" id="menu-toggle">
                <i class="fas fa-bars"></i>
            </div> -->
            <nav class="navbar">
                <a href="#" class="nav-link">Home </a>
                <a href="#projects" class="nav-link">Projects </a>
                <a href="#contact" class="nav-link">Contact Me </a>
                <a href="#about" class="nav-link">About Me</a>
            </nav>
        </header>

        <section class="home" id="home">
            <div class="home-content">
                <h1>Hi, I'm Ye Khaung.</h1>
                <h3>Software Developer</h3>
                <p>I'm a passionate software developer who loves turning ideas into real-world applications.
                    Explore my projects, skills, and the work I'm proud of. Let's create something great together!</p>
            </div>

            <div class="home-sci">
                <a href="#"><box-icon type='logo' class="iconcolor" color="#00abf0" name='facebook'></box-icon></a>
                <a href="#"><box-icon name='twitter' class="iconcolor" color="#00abf0" type='logo'></box-icon></a>
                <a href="#"><box-icon name='linkedin' class="iconcolor" color="#00abf0" type='logo'></box-icon></a>
            </div>
        </section>

        <!-- <div class="projects" id="projects">
            <h2>Projects</h2>
            <p>I'd love to hear from you! Whether you're looking to collaborate on a project, have a question, or just want to chat, feel free to reach out.</p>
            <p>If you'd prefer, you can also contact me directly:</p>
            <p><strong>Email:</strong> <a href="mailto:yk.yekhaung29@gmail.com">yk.yekhaung29@gmail.com</a></p>
            <p><strong>Phone:</strong> <a href="tel:+1234567890">+123 456 7890</a></p>
        </div> -->

        <div class="projects" id="projects">
            <h2>Projects</h2>
            <div class="projects-container">
                <div class="project-card">
                    <h3>Project Title 1</h3>
                    <p>Short description about the project. Maybe what technologies you used or what it does.</p>
                    <!-- <a href="#" target="_blank" class="btn">View Project</a> -->
                </div>

                <div class="project-card">
                    <h3>Project Title 2</h3>
                    <p>Another project summary. Keep it simple and inviting!</p>
                    <!-- <a href="#" target="_blank" class="btn">View Project</a> -->
                </div>

                <div class="project-card">
                    <h3>Project Title 3</h3>
                    <p>This could be a mobile app, website, or software you worked on.</p>
                    <!-- <a href="#" target="_blank" class="btn">View Project</a> -->
                </div>
            </div>
        </div>

        <div class="contact" id="contact">
            <h2>Contact Me</h2>
            <p>I'd love to hear from you! Whether you're looking to collaborate on a project, have a question, or just want to chat, feel free to reach out.</p>
            <p>If you'd prefer, you can also contact me directly:</p>
            <p><strong>Email:</strong> <a href="mailto:yk.yekhaung29@gmail.com">yk.yekhaung29@gmail.com</a></p>
            <!-- <p><strong>Phone:</strong> <a href="tel:+1234567890">+123 456 7890</a></p> -->
        </div>

        <div class="about" id="about">
            <h2>About Me!</h2>
            <p>
                Hello! I'm <strong>Ye Khaung</strong>, a passionate <strong>Software Developer</strong> with a strong
                focus on
                <strong>Frontend</strong> and <strong>Backend</strong> development. I love building clean, efficient,
                and user-friendly applications that address real-world problems.
            </p>
            <p>
                Over the past <strong>7 years</strong>, I’ve gained experience with technologies like
                <strong>JavaScript</strong>, <strong>TypeScript</strong>, <strong>C#</strong>, <strong>PHP</strong>, <strong>Azure DevOps</strong>, and <strong>various
                    database systems</strong>.
                    I have worked with frameworks such as <strong>React</strong>, <strong>Vue</strong>,
                <strong>Angular</strong>,
                <strong>Ionic</strong> as well as backend technologies like <strong>ASP.NET Core</strong>. Additionally, I have hands-on experience with databases like <strong>MS SQL Server</strong> and <strong>PostgreSQL</strong>. I’m always eager to learn new tools and follow best practices to continuously improve my craft.
            </p>
            <p>
                When I’m not coding, you can find me <strong>exploring new music, playing football, or diving into emerging technologies</strong>.
            </p>
            <p>
                I’m currently seeking <strong>opportunities to collaborate on exciting projects</strong>
                where I can continue to grow and make a meaningful impact.
            </p>
            <p>
                <strong>Let’s build something great together!</strong>
            </p>
        </div>
    </div>
</template>

<script>
import { setupNavLinks,setupMenuToggle } from '../js/script'; // Adjust path if needed
import 'boxicons'
export default {
    name: 'HomePage',
    mounted() {
    setupNavLinks();
    setupMenuToggle();
  }
}
// // toggle.js
// const menuToggle = document.getElementById('menu-toggle');
// const navbar = document.getElementById('navbar');
// const navLinks = document.querySelectorAll('.navbar .nav-link');

// // Toggle menu open/close
// menuToggle.addEventListener('click', () => {
//     navbar.classList.toggle('active');
// });

// // Close menu after clicking a nav link
// navLinks.forEach(link => {
//     link.addEventListener('click', () => {
//         navbar.classList.remove('active');
//     });
// });
</script>