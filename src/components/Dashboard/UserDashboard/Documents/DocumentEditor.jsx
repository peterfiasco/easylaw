import { useState } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaSave, FaDownload, FaEye, FaTimes } from 'react-icons/fa';

const EditorContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const EditorPanel = styled(motion.div)`
  width: 90%;
  max-width: 1200px;
  height: 90vh;
  background: white;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const EditorHeader = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const EditorTitle = styled.input`
  font-family: 'PP Mori', sans-serif;
  font-size: 1.5rem;
  border: none;
  outline: none;
  color: #0E0D0C;
  width: 50%;
  
  &::placeholder {
    color: #94a3b8;
  }
`;

const EditorActions = styled.div`
  display: flex;
  gap: 1rem;
`;

const ActionButton = styled(motion.button)`
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  border: none;
  background: ${props => props.primary ? '#0E0D0C' : '#f8fafc'};
  color: ${props => props.primary ? '#FAFAF9' : '#0E0D0C'};
  font-family: 'PP Mori', sans-serif;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;

const EditorContent = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  flex: 1;
  overflow: hidden;
`;

const TemplateSelector = styled.div`
  border-right: 1px solid #e2e8f0;
  padding: 1.5rem;
  overflow-y: auto;
`;

const TemplateCategory = styled.div`
  margin-bottom: 2rem;
`;

const CategoryTitle = styled.h3`
  font-family: 'PP Mori', sans-serif;
  font-size: 1rem;
  color: #64748b;
  margin-bottom: 1rem;
`;

const TemplateList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const TemplateItem = styled(motion.div)`
  padding: 1rem;
  border-radius: 8px;
  background: ${props => props.selected ? '#f8fafc' : 'transparent'};
  cursor: pointer;
  
  h4 {
    font-family: 'PP Mori', sans-serif;
    font-size: 0.875rem;
    color: #0E0D0C;
    margin-bottom: 0.25rem;
  }
  
  p {
    font-size: 0.75rem;
    color: #64748b;
  }
`;

const DocumentForm = styled.div`
  padding: 1.5rem;
  overflow-y: auto;
`;

const FormSection = styled.div`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h3`
  font-family: 'PP Mori', sans-serif;
  font-size: 1.25rem;
  color: #0E0D0C;
  margin-bottom: 1rem;
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

const FormField = styled.div`
  margin-bottom: 1rem;
`;

const FieldLabel = styled.label`
  display: block;
  font-family: 'PP Mori', sans-serif;
  font-size: 0.875rem;
  color: #64748b;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-family: 'PP Mori', sans-serif;
  
  &:focus {
    outline: none;
    border-color: #0E0D0C;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-family: 'PP Mori', sans-serif;
  resize: vertical;
  min-height: 100px;
  
  &:focus {
    outline: none;
    border-color: #0E0D0C;
  }
`;
const DocumentEditor = ({ onClose }) => {
    const [selectedTemplate, setSelectedTemplate] = useState(null);
    const [documentTitle, setDocumentTitle] = useState('');
    const [formData, setFormData] = useState({});
  
    const templateCategories = [
      {
        title: 'Business Formation',
        templates: [
          {
            id: 'llc-reg',
            name: 'LLC Registration',
            description: 'Standard LLC registration document'
          },
          {
            id: 'partnership',
            name: 'Partnership Agreement',
            description: 'Comprehensive partnership terms'
          }
        ]
      },
      {
        title: 'Employment',
        templates: [
          {
            id: 'emp-contract',
            name: 'Employment Contract',
            description: 'Standard employment agreement'
          },
          {
            id: 'nda',
            name: 'Non-Disclosure Agreement',
            description: 'Confidentiality agreement'
          }
        ]
      }
    ];
  
    const handleSave = () => {
      // Save document logic
      console.log({ documentTitle, selectedTemplate, formData });
    };
  
    const handlePreview = () => {
      // Preview document logic
    };
  
    return (
      <EditorContainer>
        <EditorPanel
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          <EditorHeader>
            <EditorTitle
              placeholder="Untitled Document"
              value={documentTitle}
              onChange={(e) => setDocumentTitle(e.target.value)}
            />
            <EditorActions>
              <ActionButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePreview}
              >
                <FaEye /> Preview
              </ActionButton>
              <ActionButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload /> Download
              </ActionButton>
              <ActionButton
                primary
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSave}
              >
                <FaSave /> Save
              </ActionButton>
              <ActionButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
              >
                <FaTimes />
              </ActionButton>
            </EditorActions>
          </EditorHeader>
  
          <EditorContent>
            <TemplateSelector>
              {templateCategories.map((category, index) => (
                <TemplateCategory key={index}>
                  <CategoryTitle>{category.title}</CategoryTitle>
                  <TemplateList>
                    {category.templates.map((template) => (
                      <TemplateItem
                        key={template.id}
                        selected={selectedTemplate?.id === template.id}
                        onClick={() => setSelectedTemplate(template)}
                        whileHover={{ backgroundColor: '#f1f5f9' }}
                      >
                        <h4>{template.name}</h4>
                        <p>{template.description}</p>
                      </TemplateItem>
                    ))}
                  </TemplateList>
                </TemplateCategory>
              ))}
            </TemplateSelector>
  
            <DocumentForm>
              {selectedTemplate ? (
                <>
                  <FormSection>
                    <SectionTitle>Document Information</SectionTitle>
                    <FormGrid>
                      <FormField>
                        <FieldLabel>Company Name</FieldLabel>
                        <Input 
                          type="text"
                          onChange={(e) => setFormData({
                            ...formData,
                            companyName: e.target.value
                          })}
                        />
                      </FormField>
                      <FormField>
                        <FieldLabel>Registration Number</FieldLabel>
                        <Input 
                          type="text"
                          onChange={(e) => setFormData({
                            ...formData,
                            regNumber: e.target.value
                          })}
                        />
                      </FormField>
                    </FormGrid>
                  </FormSection>
  
                  <FormSection>
                    <SectionTitle>Additional Details</SectionTitle>
                    <FormField>
                      <FieldLabel>Special Terms</FieldLabel>
                      <TextArea
                        onChange={(e) => setFormData({
                          ...formData,
                          specialTerms: e.target.value
                        })}
                      />
                    </FormField>
                  </FormSection>
                </>
              ) : (
                <div style={{ textAlign: 'center', color: '#64748b', marginTop: '2rem' }}>
                  Select a template to start editing
                </div>
              )}
            </DocumentForm>
          </EditorContent>
        </EditorPanel>
      </EditorContainer>
    );
  };
  
  export default DocumentEditor;
  