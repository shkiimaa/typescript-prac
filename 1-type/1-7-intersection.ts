{
  // Intersection types : &(and) 의 역할을 한다.
  type Students = {
    name: string;
    score: number;
  };

  type Worker = {
    empolyeeId: number;
    work: () => void;
  };

  function internWork(person: Students & Worker) {
    console.log(person.name, person.empolyeeId, person.work());
  }

  internWork({
    name: 'kim',
    score: 100,
    empolyeeId: 1,
    work() {},
  });
}
