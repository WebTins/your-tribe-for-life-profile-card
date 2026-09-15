<script>
    import tin from "$lib/assets/tin.png"
    import instagram from "$lib/assets/instagram.webp"
    import github from "$lib/assets/github.webp"
    import linkedin from "$lib/assets/linkedin.png"
</script>

<main>
    <h1>
        Profile Card
    </h1>

    <section>
        <h2>Tin Nguyen</h2>
        <h3>Student of Hogeschool van Amsterdam</h3>
        <div>
            <img src={tin} alt="tin" width="200">

            <ul>
                <li>
                    <a href="https://www.instagram.com/tin_ng2004/">
                        <img src={instagram} alt="instagram icon" width="35">
                    </a>
                </li>
                <li>
                    <a href="https://github.com/WebTins?tab=repositories">
                        <img src={github} alt="github icon" width="35">
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/tin-nguyen-33a211202/">
                        <img src={linkedin} alt="linkedin icon" width="35">
                    </a>
                </li>
            </ul>
        </div>
    </section>
</main>

<footer>
    <ul>
        <li>@Almere</li>
        <li>22yrs</li>
        <li>Front-end</li>
    </ul>
</footer>

