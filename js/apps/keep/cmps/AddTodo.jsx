export function  AddTodo ({ type, name, onChange }) {
  return (
    <section className="dynemic-input color">
      <h3>Hi {name}, add new todo note</h3>
      <h3>{type} input </h3>
      <label htmlFor="todo" ></label>
        <input type="text" placeholder="enter your todo" name="todo" id="todo" />
    </section>
  );
}
