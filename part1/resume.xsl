<?xml version="1.0"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:output method = "html" doctype-system = "about:legacy-compat" />
	<xsl:template match = "/">
		<html xmlns = "http://www.w3.org/1999/xhtml">
			<head>
				<meta charset="utf-8"/>
				<link rel ="stylesheet" type="text/css" href="../main.css"/>
				<link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Lato:900"/>
				<title>Resume</title>
			</head>
			<body>
				<div id="page" class="banner">
					<ul>
					  <li><a href="../tma1.html" >Assingment</a></li>
					  <li><a href="resume.xml" id = "active">Part 1</a></li>
					  <li class="dropdown">
					    <a href="../part2/index.html" class="dropbtn">Part 2</a>
					    <div class="dropdown-content">
					      <a href="../part2/unit1.html">Unit 1</a>
					      <a href="../part2/unit2.html">Unit 2</a>
					      <a href="../part2/unit3.html">Unit 3</a>
					    </div>
					  </li>
					  <li><a href="../part3/index.html">Part 3</a></li>
					  <li class="dropdown">
					    <a href="../part4/index.html" class="dropbtn">Part 4</a>
					    <div class="dropdown-content">
					      <a href="../part4/measurementConverter.html">Measurement Converter</a>
						  <a href="../part4/mortgageCalc.html">Mortgage Calculator</a>
						  <a href="../part4/tempCalc.html">Temperature Calculator</a>
					    </div>
					  </li>
					</ul>
				</div>

				<div class="heading">
					<h1 id="title"><xsl:value-of select="resume/header/name"/></h1>
					<br/>
					<xsl:value-of select="resume/header/address/."/><br/>
					<xsl:value-of select="resume/header/contact/."/>
				</div>

				
				<hr/><br/>

				<xsl:for-each select="resume/body/section">

					<h2><xsl:value-of select='./title'/></h2>
					<ul>
						<xsl:for-each select="./point">
							<li><xsl:value-of select='.'/></li>
						</xsl:for-each>
					</ul>

					<xsl:for-each select="./project">
						<h4 style='display:inline'><xsl:value-of select='./name'/></h4>
						<xsl:text> ||</xsl:text>
						<h5 style='display:inline'><xsl:value-of select='./company'/></h5>
						<h5 style='display:inline'><xsl:text> | </xsl:text></h5>
						<h5 style='display:inline'><xsl:value-of select='./date'/></h5>
						<ul>
							<xsl:for-each select="./note">
								<li><xsl:value-of select='.'/></li>
							</xsl:for-each>
						</ul>
					</xsl:for-each>
								
					<h3><xsl:value-of select='./institution'/></h3>
					<p>
						<xsl:value-of select='./program'/>
						<xsl:value-of select='./degree'/>
						<xsl:value-of select='./gradyear'/>
					</p>

					
					<xsl:for-each select="./employer">
						<h4 style='display:inline'>
							<xsl:for-each select="./company | ./addr">
								<xsl:value-of select="."/>
							</xsl:for-each>
							<xsl:text> ||</xsl:text>
						</h4>

						<h5 style='display:inline'><xsl:value-of select='./role'/></h5>
						<h5 style='display:inline'><xsl:text> | </xsl:text></h5>
						<h5 style='display:inline'><xsl:value-of select='./time'/></h5>

						<ul>
							<xsl:for-each select="./experience/point">
								<li><xsl:value-of select='.'/></li>
							</xsl:for-each>
						</ul>

					</xsl:for-each>
				</xsl:for-each>
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>

