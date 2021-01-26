const tileData = [
  {
    img: 'http://www.newenglandwaterfalls.com/4000footers/adams2.jpg',
    title: 'ADAMS',
    elevation: '5,774 ft',
  },
  {
    img: 'http://www.newenglandwaterfalls.com/4000footers/bond.jpg',
    title: 'BOND',
    elevation: '4,698 ft',
  },
  {
    img: 'http://www.newenglandwaterfalls.com/4000footers/bondcliff2.jpg',
    title: 'BONDCLIFFE',
    elevation: '4,265 ft',
  },
  {
    img: 'http://www.newenglandwaterfalls.com/4000footers/cabot.jpg',
    title: 'CABOT',
    elevation: '4,170 ft',
  },
  {
    img: 'http://www.newenglandwaterfalls.com/4000footers/cannon.jpg',
    title: 'CANNON',
    elevation: '4,100 ft',
  },
  {
    img: 'http://www.newenglandwaterfalls.com/4000footers/carrigain.jpg',
    title: 'CARRIGAIN',
    elevation: '4,700 ft',
  },
  {
    img: 'http://www.newenglandwaterfalls.com/4000footers/carterdome.jpg',
    title: 'CARTER DOME',
    elevation: '4,832 ft',
  },
  {
    img: 'http://www.newenglandwaterfalls.com/4000footers/eisenhower.jpg',
    title: 'EISENHOWER',
    elevation: '4,780 ft',
  },
  {
    img: 'http://www.newenglandwaterfalls.com/4000footers/field2.jpg',
    title: 'FIELD',
    elevation: '4,340 ft',
  },
  {
    img: 'http://www.newenglandwaterfalls.com/4000footers/flume3.jpg',
    title: 'FLUME',
    elevation: '4,328 ft',
  },
  {
    img: 'http://www.newenglandwaterfalls.com/4000footers/galehead.jpg',
    title: 'GALEHEAD',
    elevation: '4,024 ft',
  },
  {
    img: 'http://www.newenglandwaterfalls.com/4000footers/garfield.jpg',
    title: 'GARFIELD',
    elevation: '4,500 ft',
  },
  {
    img: 'http://www.newenglandwaterfalls.com/4000footers/hale.jpg',
    title: 'HALE',
    elevation: '4,054 ft',
  },
  {
    img: 'http://www.newenglandwaterfalls.com/4000footers/isolation.jpg',
    title: 'ISOLATION',
    elevation: '4,004 ft',
  },
  {
    img: 'http://www.newenglandwaterfalls.com/4000footers/jackson2.jpg',
    title: 'JACKSON',
    elevation: '4,052 ft',
  },
  {
    img: 'http://www.newenglandwaterfalls.com/4000footers/jefferson.jpg',
    title: 'JEFFERSON',
    elevation: '5,712 ft',
  },
  {
    img: 'http://www.newenglandwaterfalls.com/4000footers/northkinsman.jpg',
    title: 'KINSMAN NORTH',
    elevation: '4,293 ft',
  },
  {
    img: 'http://www.newenglandwaterfalls.com/4000footers/lafayette2.jpg',
    title: 'LAFAYETTE',
    elevation: '5,260 ft',
  },
  {
    img: 'http://www.newenglandwaterfalls.com/4000footers/liberty3.jpg',
    title: 'LIBERTY',
    elevation: '4,459 ft',
  },
  {
    img: 'http://www.newenglandwaterfalls.com/4000footers/lincoln.jpg',
    title: 'LINCOLN',
    elevation: '5,089 ft',
  },
  {
    img: 'http://www.newenglandwaterfalls.com/4000footers/madison3.jpg',
    title: 'MADISON',
    elevation: '5,367 ft',
  },
  {
    img: 'http://www.newenglandwaterfalls.com/4000footers/monroe5.jpg',
    title: 'MONROE',
    elevation: '5,384 ft',
  },
  {
    img: 'http://www.newenglandwaterfalls.com/4000footers/moosilauke.jpg',
    title: 'MOOSILAUKE',
    elevation: '4,802 ft',
  },
  {
    img: 'http://www.newenglandwaterfalls.com/4000footers/moriah.jpg',
    title: 'MORIAH',
    elevation: '4,049 ft',
  },
  {
    img: 'http://www.newenglandwaterfalls.com/4000footers/osceola2.jpg',
    title: 'OSCEOLA',
    elevation: '4,340 ft',
  },
  {
    img: 'http://www.newenglandwaterfalls.com/4000footers/eastosceola.jpg',
    title: 'OSCEOLA EAST',
    elevation: '4,156 ft',
  },
  {
    img: 'http://www.newenglandwaterfalls.com/4000footers/passaconaway.jpg',
    title: 'PASSACONAWAY',
    elevation: '4,043 ft',
  },
  {
    img: 'http://www.newenglandwaterfalls.com/4000footers/pierce2.jpg',
    title: 'PIERCE',
    elevation: '4,310 ft',
  },
  {
    img: 'http://www.newenglandwaterfalls.com/4000footers/tecumseh2.jpg',
    title: 'TECUMSEH',
    elevation: '4,003 ft',
  },
  {
    img: 'http://www.newenglandwaterfalls.com/4000footers/tom.jpg',
    title: 'TOM',
    elevation: '4,051 ft',
  },
  {
    img: 'http://www.newenglandwaterfalls.com/4000footers/northtripyramid.jpg',
    title: 'TRIPYRAMID NORTH',
    elevation: '4,180 ft',
  },
  {
    img: 'http://www.newenglandwaterfalls.com/4000footers/southtwin3.jpg',
    title: 'TWIN NORTH',
    elevation: '4,761 ft',
  },
  {
    img: 'http://www.newenglandwaterfalls.com/4000footers/southtwin4.jpg',
    title: 'TWIN SOUTH',
    elevation: '4,902 ft',
  },
  {
    img: 'http://www.newenglandwaterfalls.com/4000footers/washington2.jpg',
    title: 'WASHINGTON',
    elevation: '6,288 ft',
  },
  {
    img: 'http://www.newenglandwaterfalls.com/4000footers/waumbek.jpg',
    title: 'WAUMBEK',
    elevation: '4,006 ft',
  },
  {
    img: 'http://www.newenglandwaterfalls.com/4000footers/westbond.jpg',
    title: 'WEST BOND',
    elevation: '4,540 ft',
  },
  {
    img: 'http://www.newenglandwaterfalls.com/4000footers/willey.jpg',
    title: 'WILLEY',
    elevation: '4,285 ft',
  },
  {
    img: 'http://www.newenglandwaterfalls.com/4000footers/zealand.jpg',
    title: 'ZEALAND',
    elevation: '4,260 ft',
  },
];

export default tileData;
