import { useCallback, useState, useEffect } from 'react';

import { useFirestore } from "../../contexts/firebase/firestore.context";

import ProjectListItem from './ProjectListItem';

const ProjectList = ({itemsPerPage = 10}) => {
  const [ projects, setProjects ] = useState();
  const { getPagedProjects } = useFirestore();

  const fetchData = useCallback(async () => {
    const data = await getPagedProjects(itemsPerPage);
    setProjects(data.projects);
  }, [getPagedProjects, itemsPerPage]);

  useEffect(() => {
    fetchData()
  }, [fetchData]);

  return (
    <div className="project-list">
      {!!projects && projects.map(project => {
        return (
          <ProjectListItem key={project.uid} project={project} />
        )
      })}
      {!!projects && (projects.length >= itemsPerPage) && <button onClick={() => fetchData()}>MORE</button>}
    </div>
  )
};

export default ProjectList;