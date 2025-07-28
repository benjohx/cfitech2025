<?php
  session_start();
  $title = "Page d'accueil";
  $nav = "index";
  require "header.php";
?>
<main role="main" class="container">

<style>
       * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: Arial, sans-serif;
        }

        .container{
            margin:  0 auto;
            max-width: 1500px;;
            padding: 0 5px;
           
        }

        header {        
    position: relative;
    background-image: url('./img/bg.png');
    background-size: cover;
    background-position: center;
    height: 250px;
    color: white; 
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

header::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
}


        
        nav {
            background-color: #1a237e;
            padding: 20px;
            position: fixed;
            width: 100%;
            top: 0;
            z-index: 100;
        }

        nav ul {
            display: flex;
            justify-content: center;
            list-style: none;
        }

        nav ul li {
            margin: 0 20px;
        }

        nav ul li a {
            color: white;
            text-decoration: none;
            font-weight: bold;
        }

    
        h1 {
            color: white;
            margin-bottom: 15px;
        }

        h2 {
            color: #333;
            margin-bottom: 15px;
        }

        table {
            width: 60%;
            border-collapse: collapse;
            background: white;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            overflow: hidden;
        }

        th, td {
            padding: 12px;
            text-align: left;
            border-bottom: 1px solid #ddd;
        }

        th {
            background: #007bff;
            color: white;
            text-transform: uppercase;
        }

        tr:nth-child(even) {
            background: #f9f9f9;
        }

        tr:hover {
            background: #f1f1f1;
        }

.video-container {
    margin: 20px 0;
    text-align: center;
}

        .video-container {
            width: 80%;
            max-width: 800px;
            aspect-ratio: 16 / 9; /* Ensures correct aspect ratio */
        }

    </style>
<header>
    <h1>FILM FROM THE CITY</h1>
</header>

        <div class="video-container">
            <video controls width="100%" height="100%" autoplay loop muted><source src="img/move.mp4" type="video/mp4"></source></video>
        </div>
    </div>

      <!-- Tableau des villes -->

      <h1>Tableau des villes</h1>
      <table border="1">
    <tr><th>Pays</th><th>Capitale</th></tr>
    <?php
    require_once "Ville.php";
    foreach (Ville::getAll() as $ville) {
        echo "<tr><td>{$ville['pays']}</td><td>{$ville['capitale']}</td></tr>";
    }
    ?>
</table>


  <div class="starter-template">
    <h1>Journey to the future</h1>
    <p class="lead">The future is here and it looks great.<br> All we need to do is be patient.</p>
  </div>

</main>
<?php
    require "footer.php";
?>