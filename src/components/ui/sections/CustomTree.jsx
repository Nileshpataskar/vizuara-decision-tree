import React, { useState } from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";

const TreeNode = ({ node, level = 0, onNodeSelect, parentAnswer = "" }) => {
  const [isOpen, setIsOpen] = useState(true); // Whether the node's children are visible
  const [selectedOption, setSelectedOption] = useState(null); // Track selected option

  const isLeaf = !node.children || node.children.length === 0;
  const nodeColor = isLeaf ? "bg-red-500" : "bg-blue-500"; // Leaf vs non-leaf color
  const lineColor = isLeaf ? "bg-red-500" : "bg-blue-500"; // Color of the connecting line

  // Toggle open/close the child nodes
  const toggleOpen = () => setIsOpen(!isOpen);

  // Handle option selection
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    onNodeSelect(node, option); // Propagate to parent component
  };

  return (
    <div className={`relative pl-${level * 6} mt-6 transition-all`}>
      {/* Node Styling */}
      <div
        className={`${nodeColor} text-white font-semibold py-3 px-6 rounded-lg shadow-lg cursor-pointer flex items-center space-x-3`}
        style={{
          minWidth: "160px",
          maxWidth: "220px",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
          marginBottom: "20px",
        }}
        onClick={() => isLeaf && onNodeSelect(node, parentAnswer)} // Select node if it's a leaf
        role="button"
        aria-expanded={isOpen}
        aria-label={`Select ${node.name}`}
      >
        {/* Icon for non-leaf nodes to toggle */}
        {!isLeaf && (
          <div onClick={toggleOpen} className="text-white">
            {isOpen ? <FaAngleDown /> : <FaAngleRight />}
          </div>
        )}
        <span>{node.name}</span>
      </div>

      {/* Connector Line for Non-Leaf Nodes */}
      {!isLeaf && isOpen && (
        <div
          className={`absolute left-1/2 top-0 w-1 ${lineColor}`}
          style={{
            height: "100%",
            top: "40px",
            left: "50%",
            transform: "translateX(-50%)",
            transition: "height 0.3s ease",
          }}
        ></div>
      )}

      {/* Options for current node */}
      {isOpen && node.children && selectedOption == null && (
        <div className="flex justify-start gap-10 mt-8">
          {node.children.map((child, index) => (
            <div
              key={index}
              className="cursor-pointer bg-gray-200 p-4 rounded-lg shadow-lg hover:scale-105"
              onClick={() => handleOptionSelect(child.name)}
            >
              {child.name}
            </div>
          ))}
        </div>
      )}

      {/* Child Nodes */}
      {isOpen && node.children && selectedOption != null && (
        <div className="flex justify-center gap-10 mt-8">
          {node.children
            .filter((child) => child.name === selectedOption)
            .map((child, index) => (
              <TreeNode
                key={index}
                node={child}
                level={level + 1}
                onNodeSelect={onNodeSelect}
                parentAnswer={selectedOption}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default TreeNode;
