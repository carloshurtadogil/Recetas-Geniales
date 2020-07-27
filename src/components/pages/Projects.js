import  React from 'react';
import { ssaad, traqueur, volunesia } from '../constants/projects';
import Project from '../items/Project';


//Component to showcase most recent and proudest accomplishments
const Projects = () => {
  return (
    <div>
      {/** VOLUNESIA */}
      <Project
        columnWidth={ volunesia.columnWidth }
        componentStyle={ volunesia.componentStyle }
        description={ volunesia.description }
        github={ volunesia.github }
        imageClassname={ volunesia.imageClassname }
        images={ volunesia.images }
        imageStyle={ volunesia.imageStyle }
        stack={ volunesia.stack }
        title={ volunesia.title }
        titleSource={ volunesia.titleSource }
        titleWidth={ volunesia.titleWidth }
      />

      {/** TRAQUEUR */}
      <Project
        columnWidth={ traqueur.columnWidth }
        componentClass={ traqueur.componentClass }
        description={ traqueur.description }
        github={ traqueur.github }
        imageClassname={ traqueur.imageClassname }
        images={ traqueur.images }
        imageStyle={ traqueur.imageStyle }
        stack={ traqueur.stack }
        title={ traqueur.title }
        titleSource={ traqueur.titleSource }
        titleWidth={ traqueur.titleWidth }
      />

      {/** SSAAD Party */}
      <Project
        columnWidth={ ssaad.columnWidth }
        componentStyle={ ssaad.componentStyle }
        description={ ssaad.description }
        github={ ssaad.github }
        imageClassname={ ssaad.imageClassname }
        images={ ssaad.images }
        imageStyle={ ssaad.imageStyle }
        stack={ ssaad.stack }
        title={ ssaad.title }
        titleSource={ ssaad.titleSource }
        titleWidth={ ssaad.titleWidth }
        youtube={ ssaad.youtube }
      />
    </div>
  );
};

export default Projects;