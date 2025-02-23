<template>
    <nav class="navbar">
        <div class="navbar-container">
            <div class="logo">
                <router-link to="/">Logo</router-link>
            </div>
            <ul class="nav-links">
                <li><router-link to="/">Menu</router-link></li>
                <li><router-link to="/login">Login</router-link></li>
                <li><router-link to="/register">Registrar</router-link></li>
                <li><router-link to="/contact">Contact</router-link></li>
            </ul>

        </div>
    </nav>
</template>

<script>

</script>

<style scoped>
.navbar {
    background-color: var(--green);
    padding: 10px 20px;
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 10;
}

.navbar-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo a {
    color: white;
    text-decoration: none;
    font-size: 24px;
    font-weight: bold;
}

.nav-links {
    list-style: none;
    display: flex;
    gap: 20px;
}

.nav-links li {
    font-size: 18px;
}

.nav-links a {
    color: white;
    text-decoration: none;
    transition: color 0.3s;
}

.nav-links a:hover {
    color: #004910;
}

.hamburger {
    display: none;
    cursor: pointer;
}

.hamburger .bar {
    width: 30px;
    height: 3px;
    background-color: white;
    margin: 5px 0;
}

@media (max-width: 768px) {
    .nav-links {
        display: none;
        flex-direction: column;
        gap: 10px;
        position: absolute;
        top: 50px;
        left: 0;
        width: 100%;
        background-color: #333;
        padding: 10px 0;
    }

    .nav-links.open {
        display: flex;
    }

    .hamburger {
        display: block;
    }
}
</style>