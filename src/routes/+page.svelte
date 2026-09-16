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
        <div>
            <img class="mugshot" src={tin} alt="tin" width="200">
            <ul class="socials">
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

        <h2>{person.name}</h2>
        <h3>Student Hogeschool van Amsterdam</h3>
    </section>

    <ul class="bottom-content">
        <li>@Almere</li>
        <li>22yrs</li>
        <li>Front-end</li>
    </ul>
</main>
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
            margin-bottom: .2em;
            margin-right: 1.5em;
            line-height: .9;
            width: 7ch;
            font-size: 3em;
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
            }

            h2 {
                color: var(--primary-accent);
                width: 3ch;
                padding: .4em 0 .4em 1em;
                padding-top: .4em;
                padding-left: 1em;
                line-height: .8;
            }

            h3 {
                font-size: 12px;
                padding-left: 2em;
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
                left: -2%;
                width: 313px;
                filter: grayscale(1);
            }
            

            .socials {
                display: flex;
                flex-direction: column;
                position: absolute;
                right: 4%;
                gap: 1em;
                padding: 1rem 0 0 0;
            }
        }

        .bottom-content {
            display: flex;
            color: var(--secondary-accent);
            gap: 4.5rem;
            align-items: center;
            padding: 0;
            margin-top: .5em;
            font-family: Movement;
        }
    }
</style>