import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Sort, Filter } from '@syncfusion/ej2-react-grids';
import { ExerciseSegmentData, ExerciseSegmentGrid } from '../data/dummy';
import { Header } from '../components';
import { Link } from 'react-router-dom';


const ExerciseSegment = () => {
  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ['Delete'];
  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Exercise Segment Management" />
      <Link to="/addexercisesegment" className='p-1'>
           <span className='inline'><strong>&#10010; Add Exercise Segment</strong></span>
        </Link><br/>
      <GridComponent
        dataSource={ExerciseSegmentData}
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
          {ExerciseSegmentGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Page, Selection, Edit, Sort, Filter]} />
      </GridComponent>
    </div>
  );
};

export default ExerciseSegment;
