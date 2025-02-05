import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { FaPrint, FaDownload, FaEdit, FaTimes } from 'react-icons/fa';

const PreviewOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1100;
`;

const PreviewContainer = styled(motion.div)`
  width: 90%;
  max-width: 900px;
  height: 90vh;
  background: white;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const PreviewHeader = styled.div`
  padding: 1.5rem;
  background: #0E0D0C;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PreviewTitle = styled.h2`
  font-family: 'PP Mori', sans-serif;
  font-size: 1.25rem;
`;

const PreviewActions = styled.div`
  display: flex;
  gap: 1rem;
`;

const PreviewButton = styled(motion.button)`
  padding: 0.5rem 1rem;
  border-radius: 6px;
  border: none;
  background: ${props => props.primary ? '#FAFAF9' : 'transparent'};
  color: ${props => props.primary ? '#0E0D0C' : '#FAFAF9'};
  font-family: 'PP Mori', sans-serif;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  border: ${props => props.primary ? 'none' : '1px solid #FAFAF9'};
`;

const PreviewContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 2rem;
  background: #f8fafc;
`;

const DocumentPage = styled.div`
  background: white;
  width: 100%;
  max-width: 700px;
  margin: 0 auto 2rem;
  padding: 3rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  min-height: 1000px;
`;

const DocumentHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const DocumentTitle = styled.h1`
  font-family: 'PP Mori', sans-serif;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #0E0D0C;
`;

const DocumentMeta = styled.div`
  font-size: 0.875rem;
  color: #64748b;
`;

const DocumentSection = styled.div`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-family: 'PP Mori', sans-serif;
  font-size: 1.25rem;
  color: #0E0D0C;
  margin-bottom: 1rem;
`;

const SectionContent = styled.div`
  font-size: 1rem;
  color: #334155;
  line-height: 1.6;
`;

const DocumentPreview = ({ document, onClose, onEdit }) => {
  return (
    <PreviewOverlay>
      <PreviewContainer
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
      >
        <PreviewHeader>
          <PreviewTitle>{document?.title || 'Document Preview'}</PreviewTitle>
          <PreviewActions>
            <PreviewButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.print()}
            >
              <FaPrint /> Print
            </PreviewButton>
            <PreviewButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload /> Download
            </PreviewButton>
            <PreviewButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onEdit}
            >
              <FaEdit /> Edit
            </PreviewButton>
            <PreviewButton
              primary
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
            >
              <FaTimes />
            </PreviewButton>
          </PreviewActions>
        </PreviewHeader>

        <PreviewContent>
          <DocumentPage>
            <DocumentHeader>
              <DocumentTitle>{document?.title}</DocumentTitle>
              <DocumentMeta>
                Generated on {new Date().toLocaleDateString()}
              </DocumentMeta>
            </DocumentHeader>

            {/* Example document content */}
            <DocumentSection>
              <SectionTitle>1. Parties</SectionTitle>
              <SectionContent>
                This agreement is made between {document?.formData?.companyName} 
                (Registration Number: {document?.formData?.regNumber}) and...
              </SectionContent>
            </DocumentSection>

            <DocumentSection>
              <SectionTitle>2. Terms and Conditions</SectionTitle>
              <SectionContent>
                {document?.formData?.specialTerms}
              </SectionContent>
            </DocumentSection>
          </DocumentPage>
        </PreviewContent>
      </PreviewContainer>
    </PreviewOverlay>
  );
};

export default DocumentPreview;
