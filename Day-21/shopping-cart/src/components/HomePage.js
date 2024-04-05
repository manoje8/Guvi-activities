function HomePage(){
    const homeStyle = {
        height: "50vh",
        width: "100%",
        border: "none",
        backgroundRepeat: "no-repeat",
        backgroundImage: "url('https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        backgroundSize: "100vw",
        backgroundPositionY: "center",
        backgroundPositionX: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        color:'#ffffff'
    }
    return(
        <div className="home" style={homeStyle}>
            <h1>Shop in style</h1>
            <h4>Welcome to the online shopping</h4>
        </div>
    )
}

export default HomePage;