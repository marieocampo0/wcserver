<template>
  <div class="about-card">
    <div class="card-title">
      <div class="title-text-content">
        <h2>Members Page</h2>
      </div>
    </div>
    <div class="card-content">
      <p>
        This is the member page, where you will see the people who are the same interest as you. Go add see them! You can see their profiles
        and if you want to be connected to them or if you want to talk to them you can hit "Add Friend!" so you will be connected to them.
        <br> <br>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, 
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
      <table width=100%>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Home Adress</th>
          <th>Email Address</th>
          <th>Action</th>
        </tr>
        <tr>
          <td><img height="25%" src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/1_avatar-512.png" alt="avatar"> </td>
          <td>John Doe</td>
          <td>123 Manila Philippines</td>
          <td>johndoe@gmail.com</td>
          <td> <a href="#">View Profile</a> <br><br><a href="#">Add Friend</a> </td>
        </tr>
        <tr>
          <td> <img height="25%" src="https://i.pinimg.com/originals/d3/69/d9/d369d9056795f553e244da66e8297cca.png" alt="avatar"></td>
          <td> Mellysa Punu</td>
          <td>456 Pampanga Philippines</td>
          <td>mellypunu@gmail.com</td>
          <td> <a href="#">View Profile</a> <br><br><a href="#">Add Friend</a> </td>
        </tr><tr>
          <td><img height="25%" src="https://cdn0.iconfinder.com/data/icons/faces-of-girls/1000/_3-512.png" alt="avatar"> </td>
          <td>Jessa Mungcal</td>
          <td>145 Batangas Philipines</td>
          <td>mungcal@gmail.com</td>
          <td> <a href="#">View Profile</a> <br><br><a href="#">Add Friend</a> </td>
        </tr>
        <tr>
          <td><img height="25%" src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-512.png" alt="avatar"> </td>
          <td>Arvie Ocampo</td>
          <td>890 Bulacan Philippines</td>
          <td>arvie@gmail.com</td>
          <td> <a href="#">View Profile</a> <br><br><a href="#">Add Friend</a> </td>
        </tr><tr>
          <td><img height="25%" src="https://i.ya-webdesign.com/images/funny-png-avatar-2.png" alt="àvatar"> </td>
          <td>Edrick Tolentino</td>
          <td>109 Bataan Philippines</td>
          <td>tolentino@gmail.com</td>
          <td> <a href="#">View Profile</a> <br><br><a href="#">Add Friend</a> </td>
        </tr><tr>
          <td><img height="25%" src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/8_avatar-512.png" alt="avatar"> </td>
          <td>Mark Louise</td>
          <td>167 Pangasinan Philippines</td>
          <td>louise@gmail.com</td>
          <td> <a href="#">View Profile</a> <br><br><a href="#">Add Friend</a> </td>
        </tr>
      </table>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, 
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p><p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, 
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>

    </div>
  </div>

</template>

<style scoped>
.about-card{
  background: #333;
  padding: 3em;
  border-radius: 10px;
  color: white;
}
.card-title{
  display: flex;
  align-items: center;
  background: #222;
  border-radius: 10px;
}
.title-text-content > p{
  margin-bottom: 0;
  color: rgb(210, 210, 210)
}
.card-content p{
  line-height: 1.5;
  margin: 30px auto;
}
table{
  border-spacing: 0px;
  margin: 50px auto;
}
tr th, tr, td{
  border: none;
  border-top: none;
  padding: 10px;
  text-align: center;
}
:first-of-type{
  border-left: none;
}
:nth-of-type(2){
  border-right: none;
}
a{
  color: black;
  background: antiquewhite;
}
footer{
  background: #14367a;
  background-size: fit-content;
  border-radius: 20px;
}
.icon{
  color: #fff;
  margin-left: 20px;
}

  </style>