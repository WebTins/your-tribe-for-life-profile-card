<script>
    import tin from "$lib/assets/tin.png"
    import instagram from "$lib/assets/instagram.webp"
    import github from "$lib/assets/github.webp"
    import linkedin from "$lib/assets/linkedin.png"

    let { data } = $props();
    const person = data.person;
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
<style>
    @font-face {
        font-family: Movement;
        src: url("/fonts/MovementV.ttf") format("truetype");
    }

    main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        background: var(--primary-accent);
        height: 100vh;

        h1 {
            color: var(--secondary-accent);
            font-family: Movement;
            display: flex;
            align-self: center;
            margin-right: 4em;
        }

        section {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            min-width: 345px;
            min-height: 465px;
            background-color: var(--secondary-accent);
            font-family: Movement;

            h2, h3 {
                display: flex;
                align-self: flex-start;
                padding-left: 1em;
            }

            h3 {
                font-size: 16px;
                width: 18ch;
            }
        }

        div {
            position: relative;
            display: flex;
            min-width: 300px;
            height: 350px;
            background-color: var(--primary-accent);

            .mugshot {
                position: absolute;
                bottom: 0;
                left: 10%;
                width: 250px;
                filter: grayscale(1);
            }
            


            .socials {
                display: flex;
                flex-direction: column;
                gap: 1em;
                padding: 1rem 0 0 0;
            }
        }

        .bottom-content {
            display: flex;
            color: var(--secondary-accent);
            gap: 5rem;
            align-items: center;
            padding: 0;
            margin-top: .5em;
        }
    }
</style>