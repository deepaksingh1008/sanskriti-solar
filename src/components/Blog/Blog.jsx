import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import image1 from '../../assets/s3.jpeg'
const BlogContainer = styled.div`
  padding: 4rem 2rem;
`;

const BlogHeader = styled.div`
  position: relative;
  height: 400px;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const BlogHeaderImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const BlogHeaderTitle = styled(motion.h1)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 3rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  text-align: center;
  width: 100%;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const BlogPostMeta = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const BlogPostMetaSpan = styled(motion.span)`
  margin-right: 0.5rem;
`;

const Button = styled(motion.button)`
  padding: 0.5rem 1rem;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-bottom: 1rem;
  display: block;
  margin: 0 auto;

  &:hover {
    background-color: #555;
  }
`;

const BlogContentImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 1rem;
`;

const CommentForm = styled.div`
  background-color: #f8f8f8;
  padding: 2rem;
  border-radius: 8px;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const FormControl = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

const FormCheckLabel = styled.label`
  font-size: 0.9rem;
  color: #666;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  resize: vertical;
`;

const Blog = () => {
    const [ref, inView] = useInView();

    const [showCommentForm, setShowCommentForm] = useState(false);
    const [displayBlogContent, setDisplayBlogContent] = useState(false);

    const handleReadMoreClick = () => {
        setDisplayBlogContent(true);
    };

    const handleLeaveCommentClick = () => {
        setShowCommentForm(!showCommentForm);
    };

    return (
        <BlogContainer ref={ref}>
            <BlogHeader>
                <BlogHeaderImage
                    src={image1}
                    alt="Blog Header"
                    initial={{ opacity: 0, scale: 1.2 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    style={{ width: '100%', height: '100%' }}
                />
                <BlogHeaderTitle
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    भारत में सौरऊर्जा सब्सिडी ! 2024
                </BlogHeaderTitle>
            </BlogHeader>
            <div className="blog-post">
                <BlogPostMeta>
                    <BlogPostMetaSpan
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        onClick={handleLeaveCommentClick}
                    >
                        Leave a Comment
                    </BlogPostMetaSpan>{' '}
                    /{' '}
                    <BlogPostMetaSpan
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        Blog
                    </BlogPostMetaSpan>{' '}
                    /{' '}
                    <BlogPostMetaSpan
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                    >
                        By neovoltev.com
                    </BlogPostMetaSpan>
                </BlogPostMeta>
                <AnimatePresence>
                    {displayBlogContent ? (
                        <motion.div
                            className="blog-content"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ duration: 0.5 }}
                        >
                            <BlogContentImage
                                src="https://via.placeholder.com/800x500"
                                alt="Blog Content"
                            />
                            {/* Add your blog content here */}
                        </motion.div>
                    ) : (
                        <Button
                            onClick={handleReadMoreClick}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            Read More
                        </Button>
                    )}
                </AnimatePresence>
                <AnimatePresence>
                    {showCommentForm && (
                        <CommentForm
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h3>Leave a Comment</h3>
                            <form>
                                <FormGroup>
                                    <TextArea
                                        placeholder="Message"
                                        rows="5"
                                    ></TextArea>
                                </FormGroup>
                                <FormGroup>
                                    <FormControl
                                        type="text"
                                        placeholder="Name"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <FormControl
                                        type="email"
                                        placeholder="Email"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <FormControl
                                        type="text"
                                        placeholder="Website"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <input
                                        type="checkbox"
                                        id="saveInfoCheckbox"
                                    />
                                    <FormCheckLabel htmlFor="saveInfoCheckbox">
                                        Save my name, email, and website in this browser for the next
                                        time I comment.
                                    </FormCheckLabel>
                                </FormGroup>
                                <Button
                                    type="submit"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    Post Comment
                                </Button>
                            </form>
                        </CommentForm>
                    )}
                </AnimatePresence>
            </div>
        </BlogContainer>
    );
};
export default Blog