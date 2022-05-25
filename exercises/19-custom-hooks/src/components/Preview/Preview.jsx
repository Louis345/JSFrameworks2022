import { useStylesheet } from "../../hooks/useStylesheet";
// Import things here

function Preview() {
  /**
   * This is repeated in the "<FontSelector />" component, so it should be a custom hook
   */
  const bodyFont = JSON.parse(localStorage.getItem("bodyFont")) || {};
  const headingFont = JSON.parse(localStorage.getItem("headingFont")) || {};

  useStylesheet(bodyFont.stylesheet);
  useStylesheet(headingFont.stylesheet);

  return (
    <div style={{ fontFamily: bodyFont.fontFamily }}>
      <h1 className="mt-3" style={{ fontFamily: headingFont.fontFamily }}>
        Typography Preview
      </h1>
      <p className="lead">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Non sodales neque
        sodales ut etiam sit amet nisl purus.
      </p>
      <p>
        In arcu cursus euismod quis viverra nibh cras. At urna condimentum
        mattis pellentesque id. Mi ipsum faucibus vitae aliquet nec ullamcorper
        sit amet risus. Massa ultricies mi quis hendrerit dolor. Quam lacus
        suspendisse faucibus interdum posuere lorem. Cursus risus at ultrices mi
        tempus imperdiet nulla malesuada. Non quam lacus suspendisse faucibus
        interdum posuere lorem. Pellentesque habitant morbi tristique senectus.
        Vitae nunc sed velit dignissim sodales ut eu sem. Ornare aenean euismod
        elementum nisi. Quisque non tellus orci ac auctor augue mauris augue
        neque.
      </p>
      <blockquote className="blockquote">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </blockquote>
      <p>
        Non pulvinar neque laoreet suspendisse. Eu nisl nunc mi ipsum faucibus.
        Lectus magna fringilla urna porttitor rhoncus dolor. Porttitor eget
        dolor morbi non arcu risus quis varius quam. In hendrerit gravida rutrum
        quisque non tellus orci ac. Accumsan in nisl nisi scelerisque eu
        ultrices vitae auctor eu. Diam sit amet nisl suscipit adipiscing
        bibendum est ultricies. Ipsum consequat nisl vel pretium. Eget nunc
        scelerisque viverra mauris in.
      </p>
      <h2 style={{ fontFamily: headingFont.fontFamily }}>
        Ac tortor dignissim convallis aenean.
      </h2>
      <p>
        Turpis tincidunt id aliquet risus feugiat in. Amet massa vitae tortor
        condimentum lacinia quis vel eros. Pellentesque sit amet porttitor eget.
        Consequat id porta nibh venenatis. Tellus mauris a diam maecenas sed.
        Vitae ultricies leo integer malesuada. Egestas purus viverra accumsan in
        nisl nisi scelerisque eu. Porta lorem mollis aliquam ut porttitor leo a
        diam. Scelerisque mauris pellentesque pulvinar pellentesque habitant
        morbi tristique.
      </p>
      <ul>
        <li>
          Sapien pellentesque habitant morbi tristique senectus et netus et
          malesuada.
        </li>
        <li>
          Nisl tincidunt eget nullam non nisi est sit amet facilisis. Fames ac
          turpis egestas sed.
        </li>
        <li>
          Molestie a iaculis at erat pellentesque adipiscing commodo elit at.
        </li>
        <li>Suscipit tellus mauris a diam maecenas sed enim ut.</li>
        <li>
          Risus ultricies tristique nulla aliquet. Cursus metus aliquam eleifend
          mi.
        </li>
      </ul>
    </div>
  );
}

export default Preview;
