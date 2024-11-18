import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Sort, Filter } from '@syncfusion/ej2-react-grids';
import { ExerciseData, ExerciseGrid } from '../data/dummy';
import { Header } from '../components';
import { Link } from 'react-router-dom';


const Exercise = () => {
  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ['Delete'];
  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Exercise Management" />
      <Link to="/addexercise" className='p-1'>
           <span className='inline'><strong>&#10010; Add Exercise</strong></span>
        </Link><br/>
      <GridComponent
        dataSource={ExerciseData}
        enableHover={false}
        allowPaging
        pageSettings={{ pageCount: 5 }}
        selectionSettings={selectionsettings}
        toolbar={toolbarOptions}
        editSettings={editing}
        allowSorting
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {ExerciseGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Page, Selection, Edit, Sort, Filter]} />
      </GridComponent>
    </div>
  );
};

export default Exercise;
