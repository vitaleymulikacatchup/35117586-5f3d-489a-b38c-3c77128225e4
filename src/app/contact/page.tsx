"use client"

import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import FooterBase from '@/components/sections/footer/FooterBase';
import { BookOpen, Rocket } from 'lucide-react';

export default function ContactPage() {
  return (
    <>
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            {name: "Home", id: "/"},
            {name: "Programs", id: "programs"},
            {name: "About", id: "about"},
            {name: "Contact", id: "contact"}
          ]}
          brandName="Galileo IT School"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get Started"
          title="Ready to Transform Your Career?"
          description="Join thousands of students who have successfully transitioned into tech careers. Get program details, schedule a tour, or speak with our admissions team."
          tagIcon={Rocket}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763718330042-t5ivwcl2.jpg"
          imageAlt="Galileo IT School campus and students"
          mediaPosition="right"
          inputPlaceholder="Enter your email address"
          buttonText="Get Program Info"
          termsText="By submitting, you agree to receive program information and updates from Galileo IT School."
          onSubmit={(email) => console.log('Contact form submitted:', email)}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Everything you need to know about our programs and enrollment process"
          textPosition="left"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What prerequisites do I need to join?",
              content: "No prior coding experience required! Our programs start from the basics and gradually build up to advanced concepts. All you need is dedication and enthusiasm to learn."
            },
            {
              id: "2",
              title: "How long are the programs?",
              content: "Program duration varies: Full-time bootcamps are 12-16 weeks, part-time programs are 20-24 weeks, and specialized tracks range from 8-12 weeks depending on the subject matter."
            },
            {
              id: "3",
              title: "Do you provide job placement support?",
              content: "Yes! We offer comprehensive career services including resume reviews, interview preparation, portfolio development, and direct connections with our hiring partners."
            },
            {
              id: "4",
              title: "Are there financing options available?",
              content: "We offer multiple payment options including upfront payment discounts, installment plans, income share agreements, and need-based scholarships to make education accessible."
            },
            {
              id: "5",
              title: "What happens after graduation?",
              content: "Graduates receive lifetime access to course materials, ongoing career support, alumni network access, and continued mentorship opportunities as they advance in their careers."
            }
          ]}
          buttons={[
            {text: "Contact Admissions", href: "admissions"}
          ]}
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Latest Tech Insights"
          description="Stay updated with industry trends, career advice, and technical tutorials from our experts"
          tag="Blog"
          tagIcon={BookOpen}
          textboxLayout="default"
          animationType="slide-up"
          blogs={[
            {
              id: "1",
              category: "AI & Machine Learning",
              title: "The Future of AI in Software Development",
              excerpt: "Explore how artificial intelligence is revolutionizing the way we write code and build applications in 2024",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763718324102-7rv4l1lo.jpg",
              imageAlt: "AI and machine learning trends",
              authorName: "Dr. Sarah Johnson",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763718327053-pog21pp2.jpg",
              date: "Jan 15, 2024",
              onBlogClick: () => console.log('AI blog clicked')
            },
            {
              id: "2",
              category: "Web Development",
              title: "Modern JavaScript Frameworks Comparison",
              excerpt: "A comprehensive guide to choosing between React, Vue, and Angular for your next project",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763718324963-ez6vxk42.png",
              imageAlt: "JavaScript frameworks comparison",
              authorName: "Michael Chen",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763718328178-p3vi8gev.jpg",
              date: "Jan 10, 2024",
              onBlogClick: () => console.log('JS frameworks blog clicked')
            },
            {
              id: "3",
              category: "Career Advice",
              title: "Landing Your First Tech Job: Complete Guide",
              excerpt: "Essential tips and strategies for breaking into the tech industry and securing your dream position",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763718326146-38wycuoq.jpg",
              imageAlt: "Tech career advice and tips",
              authorName: "Emily Rodriguez",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763718329020-lkmkjgr2.jpg",
              date: "Jan 5, 2024",
              onBlogClick: () => console.log('Career blog clicked')
            }
          ]}
          buttons={[
            {text: "View All Articles", href: "blog"}
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          brandName="Galileo IT School"
          copyrightText="© 2024 | Galileo IT School"
          columns={[
            {
              title: "Programs",
              items: [
                {label: "Full-Stack Development", href: "web-development"},
                {label: "Data Science", href: "data-science"},
                {label: "UI/UX Design", href: "design"},
                {label: "Mobile Development", href: "mobile"}
              ]
            },
            {
              title: "Resources",
              items: [
                {label: "Student Portal", href: "portal"},
                {label: "Career Services", href: "career-services"},
                {label: "Alumni Network", href: "alumni"},
                {label: "Blog", href: "blog"}
              ]
            },
            {
              title: "Company",
              items: [
                {label: "About Us", href: "about"},
                {label: "Instructors", href: "instructors"},
                {label: "Success Stories", href: "success"},
                {label: "Contact", href: "contact"}
              ]
            }
          ]}
          onPrivacyClick={() => console.log('Privacy policy clicked')}
        />
      </div>
    </>
  );
}