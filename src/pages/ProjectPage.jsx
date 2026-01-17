import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProjectPage() {
  const navigate = useNavigate();
  
  const project = {
    Title: "SUPER MARKET",
    Description: "hi everyone bye. Regarding quiz 5, Mam informed us that Quiz 5 will offer a chance to improve our scores. If we score higher in this quiz, it will replace our lowest-scoring quiz. This means that only the top 4 quizzes for each student will be counted towards the final result. It's a great opportunity to increase your quiz marks, especially if you were absent in previous quizzes or want to improve your scores and for preparation mam has send me some pictures I have forwarded abovbhdbqieg hjegqifbkadhsbxiugwfbeadvxhkjncb rfvesdgtyhxzjkcrhsdbjxczm nbghujkmcdsn ebwvgfyadshujzxkncdb gfvryehwjasklnzbgfwvlj4tgaidzhc",
    
    Images: [" https://tse4.mm.bing.net/th/id/OIP.vI1BpnAQ23p0p3pjJaMFjgHaHa?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3", " https://th.bing.com/th/id/R.6a229c0b44e287eaf176e3cada7e77c9?rik=GcfOV4DbnIrLng&riu=http%3a%2f%2fimages4.fanpop.com%2fimage%2fphotos%2f17500000%2fcool-backgrounds-random-17514354-1024-640.jpg&ehk=8B8sq4kQfHiVfA3V8hKZRrzLHQ8SoE%2f73FMP4iCz6DU%3d&risl=&pid=ImgRaw&r=0", "https://tse3.mm.bing.net/th/id/OIP.ke2E7-1sPKrp7B5hDjU0qAHaGG?cb=ucfimg2ucfimg=1&w=710&h=585&rs=1&pid=ImgDetMain&o=7&rm=3", "https://tse4.mm.bing.net/th/id/OIP.0MDI4C27d7_8TkC08Su-wgHaHa?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3","https://tse1.explicit.bing.net/th/id/OIP.LitbJh02F5nvZ7l_uCGUfgHaHx?cb=ucfimg2ucfimg=1&w=750&h=787&rs=1&pid=ImgDetMain&o=7&rm=3","https://i.pinimg.com/474x/8a/e3/0e/8ae30e36c18ec64ee450dead0ec9ff83.jpg?nii=t","https://tse3.mm.bing.net/th/id/OIP.4PuCP9tL2T7laqVntAW4iQAAAA?cb=ucfimg2ucfimg=1&w=460&h=460&rs=1&pid=ImgDetMain&o=7&rm=3","https://media1.tenor.com/m/QEBosU0qSGUAAAAC/cool-cat-thug-life-glasses.gif"],
    Members: [
      { name: "Amna", img: "https://tse3.mm.bing.net/th/id/OIP.PjVYkxU9_jpaHMtD1ZU2NwHaHW?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3" , linkdin: " ", github:" " },
      { name: "hasnain", img: "https://i.pinimg.com/736x/cb/4c/fb/cb4cfb27792fec45830871a9823167ba.jpg" , linkdin:" ", github: " "},
    ],
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const nextImage= () =>{
    setCurrentIndex((prev) => (prev + 1) % project.Images.length);
  };

  const prevImage = () =>{
    setCurrentIndex((prev) => (prev - 1 + project.Images.length) %  project.Images.length);
  };

  const style = {
    container: {
      fontFamily: "Arial, sans-serif",
      background:  "   radial-gradient(circle at 20% 20%, rgba(128,0,255,0.15), transparent 60%), radial-gradient(circle at 80% 40%, rgba(0,128,255,0.1), transparent 60%), radial-gradient(circle at 50% 80%, rgba(255, 50, 149, 0.14), transparent 60%),#000",
      backgroundSize: "cover",
      Animation: "drift 20s ease infinite",
      minHeight: "100vh",
      padding: "40px 20px",
      textAlign: "center",
      width: "100vw",
      margin: "0",
      color:"#fff",


    },
    heading: {
      color: "#fff",
      fontSize: "2.8rem",
      marginBottom: "30px",
      fontWeight:"700",
      letterSpacing:"2px",
      borderBottom:"2px solid #ff4ee223",
      display:"in-line block",
      paddingBottom:"5px",
      fontFamily:"'verdana', sans-serif",
      textTransform:"uppercase",
    },
    description: {
      color: "#ddd",
      fontSize: "1.1rem",
      maxWidth: "700px",
      margin: "0 auto 80px",
    },
    gallerycontainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "60px",
      width:"100%",
      marginBottom: "80px",
    },
    image: {
      width: "600px",
      height: "400px",
      objectFit: "cover",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
    },
    button: {
        backgroundColor: "#fff",
        color: "#470404ff",
        border: "none",
        padding: "10px 15px",
        fontSize: "1.5 rem",
        borderRadius: "50%",
        cursor: "pointer",
    },

    memberssection: {
      marginTop: "40px",
    },
    MembersTitle: {
      color: "#fff",
      fontSize: "1.5rem",
      marginBottom: "20px",
    },
    Memberscontainer: {
      display: "flex",
      justifyContent:"center",
      alignItems: "center",
      gap: "30px",
      flexWrap: "wrap",
      
    },
    memberImage: {
      width: "100px",
      height: "100px",
      borderRadius: "50%",
      objectFit: "cover",
      boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
      border: "2px solid white",
    },
    membername: {
      marginTop: "10px",
      fontSize: "1rem",
      color: "#fff",
    },

    githubButton: {
        position:"absolute",
        top:"20px",
        right:"20px",
        backgroundColor: "#24292e",
        color:"#fff",
        padding:"12px 20px",
        fontSize:"0.9rem",
        border:"none",
        borderRadius:"5px",
        cursor:"pointer",
        textDecoration:"none",
        display:"inline-block",
        marginTop:"20px",
        transition:"all 0.3s ease",
        zindex:10,
    },

    memberWrapper: {
        position:"relative",
        display:"inline-block",
        cursonr:"pointer",
    },

    memberOverlay:{
        position:"absolute",
        bottom:"0",
        left:"0",
        width:"100%",
        hieght:"30%",
        backgroundColor:"rgba(0,0,0,0.6)",
        display: "flex",
        alignItems:"center",
        justifyContent:"center",
        gap:"10px",
        opacity: 0,
        transition: "opacity 0.3 ease",
        borderRadius:"50%",

    },

    overlayIcon: {
        width:"30px",
        hieght:"30px",
        color:"#fff",
        backgroundColor:"#24292e",
        borderRadius:"50%",
        display:"flex",
        alignItems:"center",
        justifyContent:"centre",
        textDecoration:"none",
        fontSize:"1rem",
        transition:"all 0.3 ease",
    },

    overlayIconHover:{
        transform:"scale(1.1)",
    },

    imageStripContainer:{
        width:"80%",
        overflow:"hidden",
        margin:"0 auto",
    },

    imageStrip:{
        display:"flex",
        gap:"20px",
        transition:"transform 0.4 ease",
    },

    stripImage:{
        width:"250px",
        hieght:"180px",
        objectFit:"cover",
        borderRadius:"10px",
        flexshrink:0,
    },



  };

  return (
    <div style={style.container}>
      {/* Navigation buttons */}
      <div style={{ position: 'absolute', top: '20px', left: '20px', zIndex: 10, display: 'flex', gap: '12px' }}>
        <button 
          onClick={() => navigate(-1)}
          style={{ 
            padding: '10px 20px', 
            backgroundColor: 'rgba(255,255,255,0.1)', 
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.2)', 
            color: 'white', 
            borderRadius: '8px', 
            cursor: 'pointer',
            fontSize: '0.9rem',
            transition: 'all 0.3s ease'
          }}
        >
          ← Back
        </button>
        <button 
          onClick={() => navigate('/')}
          style={{ 
            padding: '10px 20px', 
            backgroundColor: 'rgba(255,255,255,0.1)', 
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.2)', 
            color: 'white', 
            borderRadius: '8px', 
            cursor: 'pointer',
            fontSize: '0.9rem',
            transition: 'all 0.3s ease'
          }}
        >
          🏠 Home
        </button>
      </div>

      <h1 style={style.heading}>{project.Title}</h1>
      <p style={style.description}>{project.Description}</p>
      
      <a
      href=""
      target="_blank"
      rel="noopener noreferrer"
      style={style.githubButton}
      > view GitHub code</a>


      <div style = {style.gallerycontainer}>
        <button onClick={prevImage} style={style.button}>
            ◀
        </button>
        <div style={style.imageStripContainer}>
            <div style={{
                ...style.imageStrip,
                transform: `translateX(-${(currentIndex % project.Images.length) * 270}px) `//250px image +20px gap
            }}>
                {[...project.Images, ...project.Images].map((img,i) => (
                    <img key={i} src={img} style={style.stripImage}/>
                ))}
            </div>
        </div>
        

        <button onClick={nextImage} style={style.button}>
            ▶
        </button>
      </div>

    

      <div style={style.memberssection}>
        <h2 style={style.MembersTitle}>Team Members</h2>
        <div style={style.Memberscontainer}>
          {project.Members.map((member, i) => (
            <div key={i} style={style.memberWrapper}
            onMouseEnter={e => e.currentTarget.querySelector(".member-overlay").style.opacity = 1}
            onMouseLeave={e => e.currentTarget.querySelector(".member-overlay").style.opacity = 0}
            >
              <img
                src={member.img}
                alt={member.name}
                style={style.memberImage}
              />
              <div style={style.memberOverlay} className="member-overlay">
                <a href="member.linkdin" target="_blank" rel="noopener noreferrer" style={style.overlayIcon}> 🔗 </a>
                <a href="member.github" target="_blank" rel="noopener noreferrer" style={style.overlayIcon}> 🐱</a>
              </div>
              <p style={style.membername}>{member.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}