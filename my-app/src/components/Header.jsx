const Header = () => {
 const header = ['Home','About','Blog','Contacts'];
 
 const menuItems = header.map(
    item => <li className='menu_item'><a href="#">{ item }</a></li>
    );

 return (
    <header className="header">
    <div className="logo"></div>
    <nav className="menu">
      <ul className="menu__list">
        
           { menuItems }
     
      </ul>
    </nav>
   </header>
 )
}

export default Header;