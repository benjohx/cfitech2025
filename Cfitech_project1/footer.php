<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Footer</title>
  <link rel="stylesheet" href="footer.css">
</head>
<body>
<div class="spazio">


</div>


  <footer class="footer">
    <div class="footer-container">
      <div class="footer-section">
        <h3> WHO WE ARE </h3>
        <p>We are a tech company dedicated to providing sociale life  from stolen matrix.</p>
      </div>
      <div class="footer-section">
        <h3>Useful Links</h3>
        <ul>
          <li><a href="index.php">Home</a></li>
          <li><a href="#.php">Terms and Conditions</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Donations</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h3>Contact</h3>
        <p>Email : contact@cfitech.be</p>
        <p>Phone : +02/445 39 08</p>
        Adresse:Rue de l'Eglise Ste-Anne 63, 1081 Koekelberg.
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2025 cfitech. All rights reserved.</p>
    </div>
  </footer>

  <style>

    .spazio{
        height: 10vh;
    }

body {
  margin: 0;
  font-family: Arial, sans-serif;
}

.footer {
  background-color: #2c3e50;
  color: #fff;
  padding: 30px 20px;
  max-height: 40vh;
  overflow-y: auto;
}

.footer-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-section {
  flex: 1 1 250px;
  margin: 10px;
}

.footer-section h3 {
  border-bottom: 2px solid #3498db;
  padding-bottom: 8px;
  margin-bottom: 10px;
  font-size: 16px;
}

.footer-section p,
.footer-section ul {
  font-size: 14px;
  line-height: 1.5;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section ul li {
  margin: 6px 0;
}

.footer-section ul li a {
  color: #ecf0f1;
  text-decoration: none;
}

.footer-section ul li a:hover {
  text-decoration: underline;
}

.footer-bottom {
  text-align: center;
  padding-top: 15px;
  border-top: 1px solid #7f8c8d;
  margin-top: 20px;
  font-size: 13px;
}

  </style>

</body>
</html>
