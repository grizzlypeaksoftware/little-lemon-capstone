import { render, screen, fireEvent} from '@testing-library/react';
import BookingPage from './components/BookingPage';

test('Renders the BookingForm heading', () => {
  render(<BookingPage />);
  const headingElement = screen.getByText("Reserve a Table");
  expect(headingElement).toBeInTheDocument();
});


test('test initialize times',()=>{
  render(<BookingPage />);

  const listElements = document.querySelector("#time-list");
  var testValues = ["16:00", "16:30", "17:00", "17:30"];
  for(var i =0 ; i < listElements.length;i++){
    expect(listElements[i]).toHaveValue(testValues[i]);
  }
});

test("test update times", ()=>{
  render(<BookingPage />);
  const dateField = screen.getByRole("date-field");
  var date = new Date();
  date.setDate(date.getDate() + 1);
  fireEvent.change(dateField, { target: { value: date } });
  const listElements = document.querySelector("#time-list");
  expect(listElements).toBeInTheDocument();

});