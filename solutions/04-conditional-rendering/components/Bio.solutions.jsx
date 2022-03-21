const Bio = ({ renderAll }) => {
  const blockQuote =
    "Han Solo, known only as Han until being given the surname Solo by an Imperial recruitment officer, and formerly known as Cadet 124-329 while serving as an Imperial cadet, was a human male smuggler. He became a leader in the Alliance to Restore the Republic and an instrumental figure in the defeat of the Galactic Empire during the Galactic Civil War. He hailed from Corellia and became a smuggler, even completing the Kessel Run in just twelve parsecs with his prized ship, the Millennium Falcon, and coming under the employ of Jabba the Hutt. He was the son-in-law of fallen Jedi Knight Anakin Skywalker and Senator Padmé Amidala, husband of Princess Leia Organa, brother-in-law of Jedi Master Luke Skywalker, father of Ben Solo, rivals and close friends with fellow smuggler Lando Calrissian, and best friends with the Wookiee Chewbacca, his trusted copilot who swore a life debt to the Corellian smuggler. Solo ran afoul of Jabba after ditching a shipment of spice to avoid trouble with the Empire, owing the Hutt a great deal of money as a result. His fortune seemed to have changed when he agreed to charter Luke Skywalker, Obi-Wan Kenobi, and the droids R2-D2 and C-3PO to Alderaan, but he became caught up in the rebellion against the Empire and, after helping Princess Leia Organa escape from the Death Star, briefly fought in the Battle of Yavin, which allowed Skywalker to destroy the superweapon. Solo fought with the Rebellion for a number of years afterward, taking part in numerous operations and battles against the Empire.";

  return renderAll ? (
    <blockquote>{blockQuote}</blockquote>
  ) : (
    <div>{blockQuote.substring(0, 500) + " ..."}</div>
  );
};

export default Bio;
