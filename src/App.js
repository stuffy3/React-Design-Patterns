import SplitScreen from './SplitScreen';
import RegularList from './RegularList';
import SmallPersonListItem from './people/SmallPersonListItem';
import LargePersonListItem from './people/LargePersonListItem';
import Modal from './Modal';
import './App.css';

const LeftHandComponent = ({ name }) => {
  return <h1 style={{backgroundColor: 'blue'}}>{name}</h1>
}

const RightHandComponent = () => {
  return <h1 style={{backgroundColor: 'red'}}>Right!</h1>
}

const people = [{
	name: 'John Doe',
	age: 54,
	hairColor: 'brown',
	hobbies: ['swimming', 'bicycling', 'video games'],
}, {
	name: 'Brenda Smith',
	age: 33,
	hairColor: 'black',
	hobbies: ['golf', 'mathematics'],
}, {
	name: 'Jane Garcia',
	age: 27,
	hairColor: 'blonde',
	hobbies: ['biology', 'medicine', 'gymnastics'],
}];

const products = [{
	name: 'Flat-Screen TV',
	price: '$300',
	description: 'Huge LCD screen, a great deal',
	rating: 4.5,
}, {
	name: 'Basketball',
	price: '$10',
	description: 'Just like the pros use',
	rating: 3.8,
}, {
	name: 'Running Shoes',
	price: '$120',
	description: 'State-of-the-art technology for optimum running',
	rating: 4.2,
}];

function App() {
  return (
    <div className="App">
      <SplitScreen leftWeight={1} rightWeight={3}>
        <LeftHandComponent name="Tanner" />
        <RightHandComponent />
        </SplitScreen> 
     <RegularList
      items={people}
      resourceName="person"
      itemComponent={SmallPersonListItem} />

    <RegularList
      items={people}
      resourceName="person"
      itemComponent={LargePersonListItem} />  
    <Modal>
		<LargePersonListItem person={people[0]} />
	</Modal>

    </div>
  );
}

export default App;
