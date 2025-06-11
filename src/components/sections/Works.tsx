import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import Modal from "../atoms/Modal";
import React, { useState } from "react";

import { github } from "../../assets";
import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { TProject } from "../../types";

const ProjectCard: React.FC<{ index: number } & TProject> = ({
  index,
  name,
  description,
  tags,
  image,
  sourceCodeLink,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        glareEnable
        tiltEnable
        tiltMaxAngleX={30}
        tiltMaxAngleY={30}
        glareColor="#aaa6c3"
      >
        <div className="bg-tertiary w-full rounded-2xl p-5 sm:w-[300px] h-[520px] flex flex-col">
          <div className="relative h-[200px] w-full mb-3">
            <img
              src={image}
              alt={name}
              className="h-full w-full rounded-2xl object-cover"
            />
            <div className="card_img_hover absolute inset-0 m-3 flex justify-end">
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(sourceCodeLink, "_blank");
                }}
                className="black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
              >
                <img
                  src={github}
                  alt="github"
                  className="h-1/2 w-1/2 object-contain"
                />
              </div>
            </div>
          </div>
          
          {/* Content section with more space */}
          <div className="flex-1 flex flex-col min-h-0">
            <div className="mb-3">
              <h3 className="text-[24px] font-bold text-white mb-2 line-clamp-2">{name}</h3>
            </div>
            
            {/* Description with more lines allowed */}
            <div className="flex-1 mb-3 overflow-hidden">
              <p className="text-secondary text-[14px] leading-[22px] overflow-hidden text-ellipsis"
                 style={{
                   display: '-webkit-box',
                   WebkitLineClamp: 8,
                   WebkitBoxOrient: 'vertical',
                   maxHeight: '176px'
                 }}>
                {description}
              </p>
            </div>
            
            {/* Tags section with more height */}
            <div className="flex flex-wrap gap-2 h-[60px] overflow-hidden">
              {tags.map((tag) => (
                <p key={tag.name} className={`text-[12px] ${tag.color} whitespace-nowrap`}>
                  #{tag.name}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const [selectedProject, setSelectedProject] = useState<TProject | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (project: TProject) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <Header useMotion={true} {...config.sections.works} />

      <div className="flex w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary mt-3 max-w-3xl text-[17px] leading-[30px]"
        >
          {config.sections.works.content}
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <div key={`project-${index}`} onClick={() => handleCardClick(project)} className="cursor-pointer">
            <ProjectCard index={index} {...project} />
          </div>
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {selectedProject && (
          <div>
            <img src={selectedProject.image} alt={selectedProject.name} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-bold mb-2">{selectedProject.name}</h3>
            <p className="mb-2">{selectedProject.description}</p>
            <div className="flex flex-wrap gap-2 mb-2">
              {selectedProject.tags.map((tag) => (
                <span key={tag.name} className={`text-sm ${tag.color}`}>#{tag.name}</span>
              ))}
            </div>
            {selectedProject.sourceCodeLink && selectedProject.sourceCodeLink !== "#" && (
              <a
                href={selectedProject.sourceCodeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 px-4 py-2 bg-primary text-white rounded hover:bg-secondary"
              >
                View Source Code
              </a>
            )}
          </div>
        )}
      </Modal>
    </>
  );
};

export default SectionWrapper(Works, "projects");
