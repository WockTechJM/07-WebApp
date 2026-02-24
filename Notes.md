# 07-WebApp Notes

**Objective:** Create a simple static webpage for deployment practice.

**Files:**
- `index.html` → main webpage
- `style.css` → styling
- `Screenshots/` → browser preview

**What I learned:**
- HTML basic structure
- Linking CSS to HTML
- How to preview webpage in browser
- How to make links and buttons work




**Understanding The code I wrote for this Mini webpage**

- Header with <h1>, <h2>, and paragraph text, in a styled container
- Profile image (circular and centered)
- Skills section with 7 key skills, light blue background, bolded list
- Projects section with your personal GitHub link styled as a hover button
- Footer with dark background and centered © text
- All CSS included inside <style> so it’s self-contained — you can also move it to style.css

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Lab 07 Web App</title>
    <link rel="stylesheet" href="style.css">
    <style>
        /* ---------------- Header Section ---------------- */
        .header-section {
            background-color: #fdf6e3;
            padding: 30px;
            text-align: center;
            border-radius: 8px;
            width: 70%;
            margin: 20px auto;
        }

        .header-section h1 {
            color: #34495e;
            margin-bottom: 10px;
        }

        .header-section h2 {
            color: #5d6d7e;
            margin-bottom: 15px;
        }

        .header-section p {
            font-size: 16px;
            color: #2c3e50;
        }

        /* ---------------- Profile Image ---------------- */
        .profile-image img {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            display: block;
            margin: 20px auto;
            border: 3px solid #3498db;
        }

        /* ---------------- Skills Section ---------------- */
        .skills {
            background-color: #eaf2f8;
            padding: 20px;
            width: 60%;
            margin: 30px auto;
            border-radius: 8px;
            text-align: center;
        }

        .skills h2 { color: #2c3e50; }

        .skills ul { list-style-type: none; padding-left: 0; }

        .skills li { margin: 8px 0; font-weight: bold; }

        /* ---------------- Projects Section ---------------- */
        .projects {
            background-color: #f9f9f9;
            padding: 20px;
            width: 60%;
            margin: 30px auto;
            border-radius: 8px;
            text-align: center;
        }

        .projects h2 { color: #2c3e50; }

        .projects ul { list-style-type: none; padding-left: 0; }

        .projects li { margin: 10px 0; }

        .projects a.button {
            text-decoration: none;
            color: #3498db;
            font-weight: bold;
            padding: 5px 10px;
            border: 2px solid #3498db;
            border-radius: 5px;
            transition: 0.3s;
        }

        .projects a.button:hover {
            background-color: #3498db;
            color: white;
        }

        /* ---------------- Footer Section ---------------- */
        .footer-section {
            background-color: #34495e;
            color: white;
            text-align: center;
            padding: 15px 0;
            margin-top: 40px;
            border-radius: 5px;
            font-size: 14px;
        }
    </style>
</head>
<body>

    <!-- Header Section -->
    <div class="header-section">
        <h1>My Web App Profile</h1>
        <h2>Learning HTML and CSS</h2>
        <p>This is part of my Lab 07-WebApp folder. I am practicing HTML structure and styling.</p>
    </div>

    <!-- Profile Image -->
    <div class="profile-image">
        <img src="files/technology.jpg" alt="Profile Picture">
    </div>

    <!-- Skills Section -->
    <div class="skills">
        <h2>Skills</h2>
        <ul>
            <li>HTML & CSS</li>
            <li>Bash Scripting</li>
            <li>Git & GitHub</li>
            <li>Windows Administration</li>
            <li>Network Fundamentals</li>
            <li>Cybersecurity Basics</li>
            <li>Troubleshooting</li>
        </ul>
    </div>

    <!-- Projects Section -->
    <div class="projects">
        <h2>My Projects</h2>
        <ul>
            <li>
                <a href="https://github.com/YourUsername" target="_blank" class="button">My GitHub Portfolio</a>
            </li>
        </ul>
    </div>

    <!-- Footer Section -->
    <footer class="footer-section">
        <p>&copy; 2026 My Web App | Lab 07 Practice</p>
    </footer>

</body>
</html>
