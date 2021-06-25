<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Watch what have i dubbed</title>

    <link href="styles/style.css" rel="stylesheet" type="text/css">
    <link href="../styles/whid-orange.css" rel="stylesheet" type="text/css">

    <script src="scripts/header.js"></script>

    <link rel="icon" type="image/png" href="https://whid.live/resources/images/icon-l.png">

    <?php
    $season = htmlspecialchars($_GET["s"]);
    $ep = htmlspecialchars($_GET["e"]);

    $catalog = get_catalog();
    $episodes = get_episodes($catalog, $season);
    $title = get_title($episodes, $ep);

    $tags = construct_tags($season, $ep, $title);
    add_tags_to_page($tags);

    function get_catalog()
    {
        $catalogFile = fopen("catalog.json", "r");
        $catalogStream = fread($catalogFile, filesize("catalog.json"));
        $catalog = json_decode($catalogStream);
        fclose($catalogFile);
        return $catalog;
    }

    function get_episodes($catalog, $season)
    {
        $episodes = $catalog->{"seasons"}->$season->{"episodes"};
        return $episodes;
    }

    function get_title($episodes, $ep)
    {
        foreach ($episodes as $episode) {
            if ($episode->{"id"} == $ep) {
                return $episode->{"title"};
            }
        }
        return "Error!";
    }

    function construct_tags($season, $ep, $title)
    {
        return [
            ["theme-color", get_major_color()],
            ["og:site_name", "whid.live"],
            ["og:url", "https://whid.live/dub/watch.php?s=" . $season . "&e=" . $ep . "#"],
            ["og:title", $title],
            ["og:image", "https://whid.live/dub/resources/thumbnails/" . $season . "/" . $ep . ".png"],
            ["og:image:width", "1280"],
            ["og:image:height", "720"],
            ["og:description", "Watch what have i dubbed"],
            ["og:type", "video.other"],
            ["og:video:url", "https://whid.live/dub/resources/videos/" . $season . "/" . $ep . ".mp4"],
            ["og:video:secure_url", "https://whid.live/dub/resources/videos/" . $season . "/" . $ep . ".mp4"],
            ["og:video:type", "text/html"],
            ["og:video:width", "1280"],
            ["og:video:height", "720"]
        ];
    }

    function get_major_color()
    {
        $cols = [
            "#ffd294",
            "#a3eff7",
            "#fcaecf",
            "#bda6ff",
        ];
        return $cols[rand(0, sizeof($cols) - 1)];
    }

    function add_tags_to_page($tags)
    {
        foreach ($tags as $tag) {
            echo "<meta property=\"" . $tag[0] . "\" content=\"" . $tag[1] . "\"/>";
        }
    }
    ?>
</head>

<body>
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark py-2">
        <div class="container">
            <a class="navbar-brand" href="/">
                <img src="../resources/images/logo-l.svg" height="40" class="me-2">
                what have i done
            </a>
            <div class="collapse navbar-collapse d-flex justify-content-sm-end" id="navbarSupportedContent">
                <ul class="navbar-nav mb-2 mb-sm-0">
                    <li class="nav-item">
                        <a href="/" class="btn btn-text-primary me-2" type="button">Home</a>
                    </li>
                    <li class="nav-item">
                        <a href="/dub/" class="btn btn-text-primary me-2" type="button">whidubbed</a>
                    </li>
                    <li class="nav-item">
                        <a href="/whbd/" class="btn btn-text-primary me-2" type="button">Anniversary</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <div class="container mt-5" id="playerApp" v-cloak>
        <div class='text-center ratio ratio-16x9'>
            <video playsinline controls :src="videoURL" :poster="thumbnailURL" type="video/mp4" class="mx-auto" style="background-color: black;" ref="video" preload="auto">
                Sorry, your browser doesn't support embedded videos.
            </video>
        </div>
        <h2 class="fw-bold mb-0 mt-1">{{ title }}</h2>
        <p class="text-muted" v-if="releaseDate">Released {{ releaseDate }}</p>

        <p class="mb-0" v-for="(part, index) in parts">
            <a @click="goToPart(index)" href="javascript:void(0)">Part {{ index + 1 }}</a>: {{ part.members }}
        </p>
        <br>
    </div>

    <script src="https://unpkg.com/vue@next"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-p34f1UUtsS3wqzfto5wAAmdvj+osOnFyQFpp4Ua3gs/ZVWx6oOypYoCJhGGScy+8" crossorigin="anonymous"></script>
    <script src="scripts/util.js"></script>
    <script src="scripts/player.js"></script>
</body>

</html>