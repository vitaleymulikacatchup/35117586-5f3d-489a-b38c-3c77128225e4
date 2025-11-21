"use client"

import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import MetricCardThree from '@/components/sections/metric/MetricCardThree';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Building, DollarSign, Github, Linkedin, GraduationCap, MessageSquare, Star, TrendingUp, Users } from 'lucide-react';

export default function AboutPage() {
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

      <div id="team" data-section="team">
        <TeamCardTwo
          title="World-Class Instructors"
          description="Learn from industry veterans with years of experience at top tech companies"
          tag="Our Team"
          tagIcon={Users}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          members={[
            {
              id: "1",
              name: "Dr. Sarah Johnson",
              role: "Lead Instructor",
              description: "Former Senior Engineer at Google with 12+ years experience in full-stack development and machine learning",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763718307762-1f63v9io.jpg",
              imageAlt: "Dr. Sarah Johnson portrait",
              socialLinks: [
                {icon: Linkedin, url: "https://linkedin.com/in/sarahjohnson"},
                {icon: Github, url: "https://github.com/sarahjohnson"}
              ]
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Senior Developer & Mentor",
              description: "Ex-Facebook engineer specializing in React, Node.js and cloud architecture. Passionate about teaching modern web development",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763718309025-xi8v5bx6.jpg",
              imageAlt: "Michael Chen portrait",
              socialLinks: [
                {icon: Linkedin, url: "https://linkedin.com/in/michaelchen"}
              ]
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Data Science Lead",
              description: "Former Data Scientist at Netflix with expertise in AI, machine learning, and data visualization. PhD in Computer Science",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763718309821-i9cq5ghj.jpg",
              imageAlt: "Emily Rodriguez portrait",
              socialLinks: [
                {icon: Linkedin, url: "https://linkedin.com/in/emilyrodriguez"}
              ]
            }
          ]}
          buttons={[
            {text: "Meet All Instructors", href: "instructors"}
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardThree
          title="Student Success Stories"
          description="Hear from our graduates who transformed their careers through our programs"
          tag="Testimonials"
          tagIcon={MessageSquare}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Alex",
              handle: "@alexdev",
              testimonial: "Galileo completely changed my career trajectory. From restaurant server to software engineer at a Fortune 500 company in just 6 months!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763718310944-ekk6kkjv.jpg",
              imageAlt: "Alex testimonial photo"
            },
            {
              id: "2",
              name: "Maria",
              handle: "@mariadesigns",
              testimonial: "The UI/UX program was incredibly comprehensive. The mentorship and portfolio development support helped me land my dream job at a design agency.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763718311826-c21a6kxg.png",
              imageAlt: "Maria testimonial photo"
            },
            {
              id: "3",
              name: "David",
              handle: "@datawithdavid",
              testimonial: "The data science program exceeded my expectations. Real projects, industry tools, and amazing instructors made the learning experience unforgettable.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763718313023-hauxpi0h.jpg",
              imageAlt: "David testimonial photo"
            },
            {
              id: "4",
              name: "Jessica",
              handle: "@jessicacodes",
              testimonial: "Best investment I ever made! The career support team helped me negotiate a 90% salary increase. The skills I learned are invaluable.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763718314239-fk243qit.jpg",
              imageAlt: "Jessica testimonial photo"
            },
            {
              id: "5",
              name: "Ahmed",
              handle: "@ahmedtech",
              testimonial: "From zero coding experience to full-stack developer. The curriculum is perfectly structured and the community support is amazing.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763718315273-9tauajw1.jpg",
              imageAlt: "Ahmed testimonial photo"
            }
          ]}
          buttons={[
            {text: "Read More Reviews", href: "reviews"}
          ]}
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardThree
          title="Proven Track Record"
          description="Our success is measured by the achievements of our graduates and industry partnerships"
          tag="Success Metrics"
          tagIcon={TrendingUp}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          metrics={[
            {
              id: "graduates",
              icon: GraduationCap,
              title: "Graduates Placed",
              value: "2,500+"
            },
            {
              id: "salary",
              icon: DollarSign,
              title: "Average Salary Increase",
              value: "85%"
            },
            {
              id: "satisfaction",
              icon: Star,
              title: "Student Satisfaction",
              value: "98%"
            },
            {
              id: "partners",
              icon: Building,
              title: "Industry Partners",
              value: "150+"
            }
          ]}
          buttons={[
            {text: "View Success Stories", href: "success-stories"}
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