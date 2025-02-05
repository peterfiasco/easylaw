import { useState } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaFileAlt, FaSearch, FaFilter, FaDownload, FaEdit, FaStar } from 'react-icons/fa';

const DocumentsContainer = styled.div`
  padding: 2rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  font-family: 'PP Mori', sans-serif;
  font-size: 1.5rem;
  color: #0E0D0C;
`;

const SearchBar = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const SearchInput = styled.div`
  position: relative;
  
  input {
    padding: 0.75rem 1rem 0.75rem 2.5rem;
    border-radius: 8px;
    border: 1px solid #e2e8f0;
    width: 300px;
    font-family: 'PP Mori', sans-serif;
    
    &:focus {
      outline: none;
      border-color: #0E0D0C;
    }
  }
  
  svg {
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    color: #64748b;
  }
`;

const FilterButton = styled(motion.button)`
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  background: white;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-family: 'PP Mori', sans-serif;
`;

const DocumentsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const DocumentCard = styled(motion.div)`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  position: relative;
`;

const DocumentIcon = styled.div`
  width: 48px;
  height: 48px;
  background: #f8fafc;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  
  svg {
    color: #0E0D0C;
    font-size: 1.5rem;
  }
`;

const DocumentTitle = styled.h3`
  font-family: 'PP Mori', sans-serif;
  font-size: 1.125rem;
  color: #0E0D0C;
  margin-bottom: 0.5rem;
`;

const DocumentMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  
  span {
    font-size: 0.875rem;
    color: #64748b;
  }
`;

const DocumentStatus = styled.div`
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 500;
  
  ${props => props.status === 'completed' && `
    background: #dcfce7;
    color: #166534;
  `}
  
  ${props => props.status === 'draft' && `
    background: #fef3c7;
    color: #92400e;
  `}
`;

const DocumentActions = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const ActionButton = styled(motion.button)`
  padding: 0.5rem;
  border-radius: 8px;
  border: none;
  background: #f8fafc;
  cursor: pointer;
  
  svg {
    color: #0E0D0C;
  }
`;

const FavoriteButton = styled(motion.button)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.5rem;
  border-radius: 8px;
  border: none;
  background: transparent;
  cursor: pointer;
  
  svg {
    color: ${props => props.favorite ? '#eab308' : '#e2e8f0'};
  }
`;
const DocumentsSection = () => {
    const [documents, setDocuments] = useState([
      {
        id: 1,
        title: 'Non-Disclosure Agreement',
        type: 'Legal Agreement',
        status: 'completed',
        date: '2024-01-15',
        favorite: true
      },
      {
        id: 2,
        title: 'Employment Contract',
        type: 'Contract',
        status: 'draft',
        date: '2024-01-14',
        favorite: false
      },
      {
        id: 3,
        title: 'Business Registration',
        type: 'Corporate',
        status: 'completed',
        date: '2024-01-13',
        favorite: true
      }
    ]);
  
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState('all');
  
    const toggleFavorite = (docId) => {
      setDocuments(documents.map(doc => 
        doc.id === docId ? { ...doc, favorite: !doc.favorite } : doc
      ));
    };
  
    const filteredDocuments = documents.filter(doc => {
      const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = filterStatus === 'all' || doc.status === filterStatus;
      return matchesSearch && matchesFilter;
    });
  
    return (
      <DocumentsContainer>
        <Header>
          <Title>My Documents</Title>
          <SearchBar>
            <SearchInput>
              <FaSearch />
              <input 
                type="text" 
                placeholder="Search documents..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </SearchInput>
            <FilterButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaFilter /> Filter
            </FilterButton>
          </SearchBar>
        </Header>
  
        <DocumentsGrid>
          {filteredDocuments.map((doc) => (
            <DocumentCard
              key={doc.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
            >
              <FavoriteButton
                favorite={doc.favorite}
                onClick={() => toggleFavorite(doc.id)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaStar />
              </FavoriteButton>
              
              <DocumentIcon>
                <FaFileAlt />
              </DocumentIcon>
              
              <DocumentTitle>{doc.title}</DocumentTitle>
              
              <DocumentMeta>
                <span>{doc.type}</span>
                <DocumentStatus status={doc.status}>
                  {doc.status.charAt(0).toUpperCase() + doc.status.slice(1)}
                </DocumentStatus>
              </DocumentMeta>
              
              <DocumentActions>
                <ActionButton
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  title="Download"
                >
                  <FaDownload />
                </ActionButton>
                <ActionButton
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  title="Edit"
                >
                  <FaEdit />
                </ActionButton>
              </DocumentActions>
            </DocumentCard>
          ))}
        </DocumentsGrid>
      </DocumentsContainer>
    );
  };
  
  export default DocumentsSection;
  