import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext
} from '../../../src/components/Pagination';

const meta = {
  title: 'Navigation/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Pagination
export const Default: Story = {
  render: () => (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
};

// With Ellipsis
export const WithEllipsis: Story = {
  render: () => (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">8</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">9</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">10</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
};

// Complex Pagination
export const Complex: Story = {
  render: () => (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">4</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>5</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">6</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">20</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
};

// Interactive Example
export const Interactive: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = React.useState(1);
    const totalPages = 10;

    const renderPaginationItems = () => {
      const items: React.ReactElement[] = [];
      
      // Previous button
      items.push(
        <PaginationItem key="prev">
          <PaginationPrevious 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage(Math.max(1, currentPage - 1));
            }}
          />
        </PaginationItem>
      );

      // Page numbers
      if (totalPages <= 7) {
        // Show all pages if total is small
        for (let i = 1; i <= totalPages; i++) {
          items.push(
            <PaginationItem key={i}>
              <PaginationLink
                href="#"
                isActive={i === currentPage}
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage(i);
                }}
              >
                {i}
              </PaginationLink>
            </PaginationItem>
          );
        }
      } else {
        // Show pages with ellipsis for large sets
        items.push(
          <PaginationItem key={1}>
            <PaginationLink
              href="#"
              isActive={1 === currentPage}
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage(1);
              }}
            >
              1
            </PaginationLink>
          </PaginationItem>
        );

        if (currentPage > 3) {
          items.push(
            <PaginationItem key="ellipsis1">
              <PaginationEllipsis />
            </PaginationItem>
          );
        }

        const start = Math.max(2, currentPage - 1);
        const end = Math.min(totalPages - 1, currentPage + 1);

        for (let i = start; i <= end; i++) {
          items.push(
            <PaginationItem key={i}>
              <PaginationLink
                href="#"
                isActive={i === currentPage}
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage(i);
                }}
              >
                {i}
              </PaginationLink>
            </PaginationItem>
          );
        }

        if (currentPage < totalPages - 2) {
          items.push(
            <PaginationItem key="ellipsis2">
              <PaginationEllipsis />
            </PaginationItem>
          );
        }

        items.push(
          <PaginationItem key={totalPages}>
            <PaginationLink
              href="#"
              isActive={totalPages === currentPage}
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage(totalPages);
              }}
            >
              {totalPages}
            </PaginationLink>
          </PaginationItem>
        );
      }

      // Next button
      items.push(
        <PaginationItem key="next">
          <PaginationNext
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage(Math.min(totalPages, currentPage + 1));
            }}
          />
        </PaginationItem>
      );

      return items;
    };

    return (
      <div className="space-y-4">
        <p className="text-center text-sm text-gray-600">Current page: {currentPage}</p>
        <Pagination>
          <PaginationContent>
            {renderPaginationItems()}
          </PaginationContent>
        </Pagination>
      </div>
    );
  },
};

// Real-world Example: Search Results
export const SearchResults: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="text-sm text-gray-600">
        Showing <span className="font-medium">21-40</span> of <span className="font-medium">86</span> results
      </div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="/search?page=1" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="/search?page=1">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="/search?page=2" isActive>2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="/search?page=3">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="/search?page=4">4</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="/search?page=5">5</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="/search?page=3" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  ),
}; 