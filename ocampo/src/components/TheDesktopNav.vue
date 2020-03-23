<template>
    <section class="nav">
        <div class="nav-log">
            <img height="300px" src="https://dj9qbnzzr9kvd.cloudfront.net/prev_cache/02e6769a51f6af7c436aaae949685bc8c702af30.png?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kajlxYm56enI5a3ZkLmNsb3VkZnJvbnQubmV0L3ByZXZfY2FjaGUvMDJlNjc2OWE1MWY2YWY3YzQzNmFhYWU5NDk2ODViYzhjNzAyYWYzMC5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE2NDQxODgzNTR9fX1dfQ__&Signature=ieNiiQI9HtJn2ACtScDFkjWKH4gvi~5TwUDuZWPZx8zP9HUIsXGsuBhz9Iv7QC~XC-qEyaJPPzYDbEaG0s5wwRmYBIVJQIwZGZLdCa2RrbzYH-KQMzIqQWDweVtUAeIgKkxcZrrcoDCYZCYEGlTuSfzp89MJhS660zZo~fLuPYs_&Key-Pair-Id=APKAIO477MYVHURLGJSA" alt="logo">
        </div>
        <div class="nav-menu">
            <ul class="nav-menu-list">
                <li><a class="nav-list-item" href="/">HOME</a></li><br><br>
                <li><a class="nav-list-item" href="/Members">Member Page</a></li><br><br>
                <li><a class="nav-list-item" href="/NewsPage">News Page</a></li>
                
            </ul>
        </div>

<footer>
    <br><br><br><br><br><br>
    <table>
        <tr>
        <th>
        <h3>Contact Us  <img height="30px" src="https://cdn.onlinewebfonts.com/svg/img_147380.png" alt=""></h3></th>
      <th><h3>About Us <img height="30px" src="https://cdn.onlinewebfonts.com/svg/img_264169.png" alt=""> </h3></th></tr>
</table>
<br>
<table>
    <tr>
        <td><img height="50px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Viu_logo.svg/1200px-Viu_logo.svg.png" alt=""></td>
        <td><img height="60px" src="https://lh3.googleusercontent.com/GvSi405gek4sk0IG4V2p1LT2UG7FmHr2OX27fqX3KNrEBgstHrLaTyZcXFQr6AG9GL_P" alt=""></td>
        <td><img height="70px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Netflix_icon.svg/1200px-Netflix_icon.svg.png" alt=""></td>
    </tr>
</table>
        
    </footer>

    </section>
</template>

<script>
export default {
    
}
</script>
<style scope>
.nav{
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    background: #333 ;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20vw;
}
.nav-logo{
    margin: 100px auto;
}
.nav-menu{
    color:whitesmoke;
}
.nav-menu-list{
    list-style: none;
    padding: 0;
}
.nav-list-item{
    background: rgb(234, 240, 183);
    padding: 10px 20px;
    text-align: center;
    margin: 10px auto;
}
.nav-list-item:hover{
    width: 100%;
}
a{
    font-size: 1.0em;
}

</style>